// ═══════════════════════════════════════════════════════════════
// Wingman Cloudflare Worker
// Endpoints:
//   POST /v1/scan        — Claude market scan
//   POST /v1/sentiment   — Grok sentiment analysis
//   POST /v1/review      — Claude trade review
//   POST /v1/analyse     — Claude chart analysis (image)
//   POST /v1/behaviour   — Claude behavioural analysis
//   GET  /v1/candles     — TwelveData OHLC candle data
//   GET  /v1/news        — Finnhub market news
// ═══════════════════════════════════════════════════════════════

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

function err(msg, status = 500) {
  return json({ error: msg }, status);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const path = url.pathname;

    // ── POST /v1/scan ──────────────────────────────────────────────
    if (path === '/v1/scan' && request.method === 'POST') {
      const body = await request.json();
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 4000,
          system: body.system,
          messages: body.messages,
        }),
      });
      const data = await res.json();
      return json(data, res.status);
    }

    // ── POST /v1/sentiment ─────────────────────────────────────────
    if (path === '/v1/sentiment' && request.method === 'POST') {
      const body = await request.json();

      // Try Grok first, fall back to Claude
      if (env.GROK_API_KEY) {
        const res = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.GROK_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'grok-3',
            max_tokens: 2000,
            messages: [{ role: 'user', content: body.prompt }],
          }),
        }).catch(() => null);

        if (res && res.ok) {
          const data = await res.json();
          const text = data.choices?.[0]?.message?.content || '';
          const parsed = safeParseJSON(text);
          if (parsed) return json(parsed);
        }
      }

      // Claude fallback for sentiment
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 2000,
          messages: [{ role: 'user', content: body.prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || '';
      const parsed = safeParseJSON(text);
      return json(parsed || { sentiments: [] });
    }

    // ── POST /v1/review ────────────────────────────────────────────
    if (path === '/v1/review' && request.method === 'POST') {
      const body = await request.json();
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: body.prompt }],
        }),
      });
      const data = await res.json();
      return json(data, res.status);
    }

    // ── POST /v1/analyse ───────────────────────────────────────────
    if (path === '/v1/analyse' && request.method === 'POST') {
      const body = await request.json();
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 1500,
          messages: [{
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: body.mediaType || 'image/png',
                  data: body.imageBase64,
                },
              },
              {
                type: 'text',
                text: `Analyse this trading chart. ${body.context ? 'Context: ' + body.context : ''} Provide: market structure, key levels, bias, potential setups, and what to watch for. Be specific and actionable.`,
              },
            ],
          }],
        }),
      });
      const data = await res.json();
      return json(data, res.status);
    }

    // ── POST /v1/behaviour ─────────────────────────────────────────
    if (path === '/v1/behaviour' && request.method === 'POST') {
      const body = await request.json();
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: body.prompt }],
        }),
      });
      const data = await res.json();
      return json(data, res.status);
    }

    // ── GET /v1/candles ────────────────────────────────────────────
    if (path === '/v1/candles' && request.method === 'GET') {
      const symbol     = url.searchParams.get('symbol');
      const interval   = url.searchParams.get('interval') || '1day';
      const outputsize = url.searchParams.get('outputsize') || '30';

      if (!symbol) return err('symbol is required', 400);

      const tdUrl = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=${interval}&outputsize=${outputsize}&apikey=${env.TWELVEDATA_API_KEY}`;
      const res = await fetch(tdUrl);
      const data = await res.json();
      return json(data, res.status);
    }

    // ── GET /v1/news ───────────────────────────────────────────────
    if (path === '/v1/news' && request.method === 'GET') {
      const category = url.searchParams.get('category') || 'general';
      const newsUrl  = `https://finnhub.io/api/v1/news?category=${category}&token=${env.FINNHUB_API_KEY}`;
      const res = await fetch(newsUrl, { signal: AbortSignal.timeout(8000) });
      const data = await res.json();
      return json(data, res.status);
    }

    return err('Not found', 404);
  },
};

// ── Helpers ────────────────────────────────────────────────────
function safeParseJSON(text) {
  try {
    const match = text.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : null;
  } catch {
    return null;
  }
}
