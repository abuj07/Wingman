# ⚡ Wingman — AI Trading Analyst

**Multi-asset AI analysis · Live order book · Institutional positioning · Economic calendar · Trade journal & psychology coach**

A professional-grade, self-hosted trading intelligence tool that runs entirely in a single HTML file. No servers. No subscriptions. No data sent anywhere except directly to the APIs you configure. Your keys, your data, your edge.

---

## 🌐 Live Demo

**[https://abuj07.github.io/Wingman/](https://abuj07.github.io/Wingman/)**

---

## What Wingman Does

Wingman combines four things most traders use separately — AI analysis, market structure data, an economic calendar, and a trade journal — into one coherent tool that runs offline-first in any modern browser.

### AI Market Scan
Select any combination of instruments across 54 assets and run a multi-timeframe analysis (Daily / 4H / 1H / 15M). Claude reads live candle data from Twelve Data and produces:
- Overall verdict and market bias
- Specific entry zones, stop loss, take profit, and lot size
- Plain English explanation written like a WhatsApp message — no jargon
- A copy-ready trade summary you can paste directly into your broker or group
- Cross-asset correlation intelligence when scanning multiple pairs

### Dual AI Sentiment
Alongside the Claude technical scan, Grok (xAI) or Gemini Flash runs a parallel sentiment analysis pulling from real-time market narrative, social data, and news. You see:
- Sentiment score (−100 to +100)
- Dominant market narrative
- Smart money positioning vs retail (contrarian signal)
- Upcoming risk events that could flip sentiment
- Which AI ran the analysis — transparently labelled

### Live Chart
Full-screen TradingView chart covering all 54 instruments across 6 timeframes. The chart page includes:
- Searchable instrument dropdown (type "gold", "oil", "eth" to filter instantly)
- Quick pip/RR calculator on the side panel — enter entry, SL, TP and see distances, ratio, and recommended lot size live
- Live price feed for the active pair
- Session status (London / New York / Tokyo / Sydney with overlap detection)
- Key support and resistance levels from the last scan, automatically populated

### Market Depth (4 data sources, all free)
- **Retail Sentiment (OANDA)** — Long/short ratios across 8 forex and commodity pairs. Automatic contrarian signal: when 70%+ of retail is one-sided, the institutional position is likely the opposite. No API key needed.
- **Crypto Order Book (Binance)** — Real-time 10-level bid/ask depth for BTC, ETH, SOL, XRP, BNB. Bid/ask imbalance percentage with directional signal. Auto-refreshes every 10 seconds while you're on the tab.
- **COT Report (CFTC)** — Commitment of Traders institutional positioning for Gold, Silver, Crude Oil, EUR/USD, GBP/USD, JPY, and Bitcoin. Shows commercial hedgers, large speculators, and small specs net positions with interpretation. No API key needed.
- **Options Flow (CBOE)** — Put/call ratios for SPX, Nasdaq, and Gold ETF with VIX fear gauge. Explained in plain terms with interpretation guidance.

### Event Calendar
Full monthly calendar with:
- Click any date to see all economic events for that day
- High-impact events highlighted in red, speeches/political in purple
- Compact month grid with dot indicators on event days
- Automatic curated events: FOMC, ECB decisions, BOE MPC, OPEC summits, G7/G20, NFP Fridays, US CPI
- **Finnhub integration**: live Bloomberg, Reuters, CNBC, and MarketWatch headlines with automatic detection of market-moving keywords (Powell, Lagarde, Trump, OPEC, Fed, ECB)
- Speaker alert strip — flags recent mentions of central bank heads, political leaders, and institutions
- Filter by: All / High Impact / Speeches / Medium

**Compact news widget on the scan page** — always shows today's top 3 critical events above the scan controls. One tap links to the full calendar.

### Trade Journal
Log every trade with pair, direction, lot size, entry, exit, P&L, timeframe, and notes. The journal calculates win rate, streak, and total P&L automatically.

**AI Trade Review** — tap "AI Review" on any logged trade and Claude reads your entry, exit, notes, and recent trading pattern to give you:
- Grade (A–F) and score out of 100
- Technical assessment of the trade quality
- Psychology and behaviour analysis
- Pattern detection across your recent losses
- The single most important thing to focus on

### Session Heatmap
Visualises your journal data as a colour-coded grid — P&L by day of week vs trading session. Shows your best and worst days, and a per-pair breakdown with win rate and total P&L.

### Price Alerts
Set price alerts on any of the 54 instruments. Checks every 5 seconds against live prices. Triggers a browser push notification (if permission granted) or a toast notification. Alerts persist across sessions in localStorage.

### Chart Analysis (Screenshot AI)
Upload any chart screenshot from any platform — TradingView, MetaTrader, cTrader, anywhere. Claude's vision model analyses the image and returns a full technical breakdown: trend, structure, support/resistance, candlestick patterns, and potential trade setups. Includes a "Read aloud" button.

### Voice Briefing
One button reads your scan results aloud using the Web Speech API — verdict, trend bias, and the first setup in plain spoken English. Works in Chrome, Safari, and Edge. No API key needed, completely free.

### Risk Calculator
Enter your balance, risk percentage, instrument, entry and stop loss. Get the recommended lot size, stop distance, and pip value. Includes a quick reference table for XAUUSD across common account sizes.

### Pre-Trade Checklist
Six-item checklist based on your trading rules — confirm you've checked the daily trend, news window, lot size, and emotional state before entering. One-tap reset. "All Clear" check validates all items before confirming.

---

## Instrument Coverage (54 assets)

| Group | Instruments |
|---|---|
| Metals | XAU/USD (Gold), XAG/USD (Silver), XPT/USD (Platinum), XCU/USD (Copper) |
| Forex — Majors | EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD |
| Forex — Minors | EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY, CAD/JPY, EUR/CHF, GBP/CHF, EUR/CAD, AUD/CAD, AUD/NZD, CHF/JPY |
| Crypto | BTC, ETH, SOL, XRP, BNB, ADA, DOT, LINK |
| Indices | US30, SPX500, NAS100, UK100 (FTSE), GER40 (DAX), JPN225, AUS200, HK50 |
| Energy | WTI Crude, Brent Crude, Natural Gas, Gasoline |
| Softs & Ags | Coffee, Cocoa, Sugar, Wheat, Corn, Soybean, Cotton, Lumber |
| Derived | XAU/EUR, XAU/GBP, BTC/ETH, XAU/BTC |

---

## API Keys — What You Need

All keys are **optional except Claude**. Each unlocks additional features. Nothing is required on a server — everything goes directly from your browser to the respective API.

| Key | Required | Cost | What it unlocks | Where to get it |
|---|---|---|---|---|
| **Claude API** | ✅ Yes | Pay-as-you-go (~$5 lasts months) | AI scan, trade review, chart analysis, news fallback | [console.anthropic.com](https://console.anthropic.com) |
| **Twelve Data** | Optional | Free (800 calls/day) | Live candle data for all 4 timeframes | [twelvedata.com](https://twelvedata.com) |
| **Grok (xAI)** | Optional | Paid | Real-time market sentiment from X/social data | [console.x.ai](https://console.x.ai) |
| **Gemini Flash** | Optional | Free (1,500/day) | AI sentiment (free alternative to Grok) | [aistudio.google.com](https://aistudio.google.com) |
| **Finnhub** | Optional | Free (60 req/min) | Bloomberg/Reuters headlines, speaker tracker | [finnhub.io](https://finnhub.io) |

**Without Twelve Data:** The AI scan still runs using Claude's training knowledge, but flags that prices are approximate and no live candle data is available.

**Without sentiment keys:** The scan returns Claude technical analysis only. A purple nudge in the results points to where to add Gemini (free).

**Without Finnhub:** The calendar shows economic events from the Tradays feed (free, no key). News headlines section shows a prompt to add the key.

All keys are stored in your browser's `localStorage`. They are never sent anywhere except the respective API endpoints. No analytics, no tracking, no backend.

---

## Getting Started

### Option 1 — Use the hosted version
Go to **[https://abuj07.github.io/Wingman/](https://abuj07.github.io/Wingman/)** and enter your Claude API key on the setup screen.

### Option 2 — Self-host (recommended for privacy)

```bash
git clone https://github.com/abuj07/Wingman.git
cd Wingman
# Open index.html directly in your browser — no build step needed
open index.html
```

Or serve locally:
```bash
npx serve .
# Then visit http://localhost:3000
```

Or deploy your own GitHub Pages fork:
1. Fork this repository
2. Go to Settings → Pages → Source: Deploy from branch → main
3. Your instance will be live at `https://YOUR-USERNAME.github.io/Wingman/`

---

## Architecture

Wingman is a **single HTML file** (~4,800 lines). Everything — HTML, CSS, and JavaScript — lives in `index.html`. There is no build system, no npm, no bundler, no backend.

**Data flow:**
```
Browser → Twelve Data API (live candle data)
Browser → Anthropic API (Claude AI analysis)
Browser → xAI API (Grok sentiment) [optional]
Browser → Google Gemini API (sentiment) [optional]
Browser → Finnhub API (news headlines) [optional]
Browser → Binance REST API (order book, no key)
Browser → CBOE API (options flow, no key)
Browser → Tradays (economic calendar, no key)
```

**Storage:** All user data (trades, keys, alerts, settings) is stored in `localStorage`. Nothing persists on any server. Clearing browser data resets the app.

---

## Navigation

**Trading**
- Market Scan — AI multi-timeframe analysis with Grok/Gemini sentiment
- Live Chart — Full-screen TradingView with searchable instrument selector and side calculator
- Risk Calculator — Lot size and pip value calculator

**Markets & Analysis**
- Market Depth — OANDA sentiment, Binance order book, COT report, options flow
- Event Calendar — Full monthly calendar with economic events and Finnhub news
- Trade Journal — Log trades, view P&L, get AI trade reviews
- Session Heatmap — Visual breakdown of performance by day and session
- Price Alerts — Set price-level alerts on any instrument
- Chart Analysis — Upload any chart screenshot for AI analysis
- Checklist — Pre-trade checklist

**Settings**
- All API keys (Claude, Twelve Data, Grok, Gemini Flash, Finnhub)
- Default balance and risk percentage
- Data reset

---

## Credits & Data Sources

- **AI Analysis:** [Anthropic Claude](https://anthropic.com) (claude-haiku-4-5)
- **Sentiment:** [xAI Grok](https://x.ai) / [Google Gemini Flash](https://aistudio.google.com)
- **Live Candles:** [Twelve Data](https://twelvedata.com)
- **Charts:** [TradingView Widget](https://tradingview.com)
- **News:** [Finnhub](https://finnhub.io) (Bloomberg, Reuters, CNBC, MarketWatch aggregation)
- **Economic Calendar:** TradingView Economic Calendar
- **Retail Sentiment:** [OANDA](https://oanda.com) open positions
- **Order Book:** [Binance](https://binance.com) REST API
- **COT Data:** [CFTC](https://cftc.gov) Commitment of Traders
- **Options Flow:** [CBOE](https://cboe.com) delayed quotes

---

## Disclaimer

Wingman is an analytical tool, not financial advice. All analysis, setups, and signals are for informational purposes only. Trading leveraged instruments carries significant risk of loss. Past performance of any analysis does not guarantee future results. Always apply your own judgement and risk management. Never risk more than you can afford to lose.

---

## License

MIT — fork it, modify it, deploy your own instance. Attribution appreciated but not required.

---

*Built as a solo project. Feedback and pull requests welcome.*
