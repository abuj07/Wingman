# ⚡ Wingman — Trade Analyst

**Multi-asset analysis · Live order book · Institutional positioning · Economic calendar · Sim Trader · Trade journal**

A professional-grade, self-hosted trading intelligence tool that runs entirely in a single HTML file. No servers. No subscriptions. No data sent anywhere except directly to the APIs you configure. Your keys, your data, your edge.

---

## 🌐 Live Demo

**[https://abuj07.github.io/Wingman/](https://abuj07.github.io/Wingman/)**

---

## What Wingman Does

Wingman combines six things most traders use separately — market analysis, live market structure data, a Sim Trader, an economic calendar, a trade journal, and a session heatmap — into one coherent tool that runs in any modern browser.

### Market Scan
Select any combination of instruments across 54 assets and run a multi-timeframe analysis (Daily / 4H / 1H / 15M). Produces:
- Overall verdict and market bias
- Specific entry zones, stop loss, take profit, and lot size
- Plain English explanation — no jargon
- A copy-ready trade summary
- Cross-asset correlation intelligence when scanning multiple pairs

### Dual Sentiment Analysis
Alongside the technical scan, Grok (xAI) or Gemini Flash runs a parallel sentiment analysis pulling from real-time market narrative, social data, and news. You see:
- Sentiment score (−100 to +100)
- Dominant market narrative
- Smart money positioning vs retail (contrarian signal)
- Upcoming risk events that could flip sentiment

### Sim Trader (formerly Live Chart)
Full TradeLocker-style virtual trading simulator with:
- Virtual account starting at $10,000 — add funds anytime if exhausted
- Place BUY / SELL orders with market, limit, or stop entry types
- Risk amount input — auto-calculates lot size from your risk $ and SL distance
- Leverage options from 1:10 to 1:Unlimited (including 1:2000, 1:5000)
- Stop Loss, Take Profit, and R:R ratio displayed before entry
- Live open P&L that updates every 5 seconds from real prices
- Close individual positions or close all at once
- Full trade history with win rate and net P&L
- Margin requirement shown before placing each trade

### Session Heatmap
Visualises your trading data as a colour-coded grid — P&L by day of week vs trading session. Data sources are toggleable: use Sim Trader trades, Trade Journal trades, or both combined.

### Live Chart
Full-screen TradingView chart covering all 54 instruments across 6 timeframes. Includes a pip/RR calculator on the side panel and live price feed.

### Market Depth (4 data sources, all free)
- **Retail Sentiment (OANDA)** — Long/short ratios across 8 forex and commodity pairs
- **Crypto Order Book (Binance)** — Real-time 10-level bid/ask depth
- **COT Report (CFTC)** — Institutional positioning for Gold, Silver, Oil, EUR/USD, GBP/USD, JPY, Bitcoin
- **Options Flow (CBOE)** — Put/call ratios for SPX, Nasdaq, and Gold ETF with VIX fear gauge

### Event Calendar
Full monthly calendar pulling from ForexFactory (primary source) with TradingView as fallback:
- Click any date to see events for that day — only the selected date is highlighted
- High-impact events in red, speeches/political in purple
- Day abbreviations (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
- Curated recurring events: FOMC, ECB, BOE MPC, OPEC, NFP, US CPI, G7/G20
- Finnhub integration: live Bloomberg, Reuters, CNBC, MarketWatch headlines

### Trade Journal
Log every trade with pair, direction, lot size, entry, exit, P&L, timeframe, and notes. Calculates win rate, streak, and total P&L automatically.

**Trade Review** — tap "Review" on any logged trade for a full coaching breakdown: grade, technical assessment, psychology analysis, pattern detection, and improvement focus.

### Risk Calculator
Enter your balance, risk %, instrument, entry and stop loss. Get the recommended lot size. The Martingale Warning has been replaced by a **Trade Behaviour Review** — a dynamic analysis of your actual sizing patterns across both Sim Trader and Trade Journal trades. Detects escalation after losses, psychology patterns, and gives actionable coaching.

### Home Page Live Prices
The home page always displays a default set of the most commonly traded instruments: Gold, Bitcoin, EUR/USD, GBP/USD, USD/JPY, ETH, US30, and WTI Oil — regardless of scan selection. Prices update via Binance WebSocket (crypto) and Twelve Data / Yahoo Finance (non-crypto).

### Price Alerts
Set price alerts on any of the 54 instruments. Checks every 5 seconds against live prices. Browser push notifications or toast fallback. Persists across sessions.

### Chart Analysis (Screenshot)
Upload any chart screenshot from any platform. Returns a full technical breakdown: trend, structure, support/resistance, candlestick patterns, and potential setups. Includes a "Read aloud" button.

### Voice Briefing
One button reads your scan results aloud. Works in Chrome, Safari, and Edge.

### Pre-Trade Checklist
Six-item checklist based on your trading rules. One-tap reset and "All Clear" confirmation.

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
| **Claude API** | ✅ Yes | Pay-as-you-go (~$5 lasts months) | Market scan, trade review, chart analysis | [console.anthropic.com](https://console.anthropic.com) |
| **Twelve Data** | Optional | Free (800 calls/day) | Live candle data for all 4 timeframes | [twelvedata.com](https://twelvedata.com) |
| **Grok (xAI)** | Optional | Paid | Real-time market sentiment from X/social data | [console.x.ai](https://console.x.ai) |
| **Gemini Flash** | Optional | Free (1,500/day) | Sentiment analysis (free alternative to Grok) | [aistudio.google.com](https://aistudio.google.com) |
| **Finnhub** | Optional | Free (60 req/min) | Bloomberg/Reuters headlines, speaker tracker | [finnhub.io](https://finnhub.io) |

**Without Twelve Data:** The scan still runs using market knowledge, but flags that prices are approximate and no live candle data is available.

All keys are stored in your browser's `localStorage`. They are never sent anywhere except the respective API endpoints. No analytics, no tracking, no backend.

---

## Getting Started

### Option 1 — Use the hosted version
Go to **[https://abuj07.github.io/Wingman/](https://abuj07.github.io/Wingman/)** and enter your Claude API key on the setup screen.

### Option 2 — Self-host (recommended for privacy)

```bash
git clone https://github.com/abuj07/Wingman.git
cd Wingman
open index.html
```

Or serve locally:
```bash
npx serve .
# Then visit http://localhost:3000
```

---

## Architecture

Wingman is a **single HTML file** (~5,700 lines). Everything — HTML, CSS, and JavaScript — lives in `index.html`. There is no build system, no npm, no bundler, no backend.

**Data flow:**
```
Browser → Twelve Data API (live candle data)
Browser → Anthropic API (analysis engine)
Browser → xAI API (Grok sentiment) [optional]
Browser → Google Gemini API (sentiment) [optional]
Browser → Finnhub API (news headlines) [optional]
Browser → Binance REST API (order book + crypto prices, no key)
Browser → Binance WebSocket (real-time crypto price feed, no key)
Browser → CBOE API (options flow, no key)
Browser → ForexFactory (economic calendar, no key)
Browser → TradingView Economic Calendar (fallback, no key)
Browser → Yahoo Finance (price fallback, no key)
```

**Storage:** All user data (trades, sim account, keys, alerts, settings) is stored in `localStorage`. Nothing persists on any server. Clearing browser data resets the app.

---

## Navigation

**Trading**
- Market Scan — Multi-timeframe analysis with Grok/Gemini sentiment
- Live Chart — Full-screen TradingView with searchable instrument selector
- **Sim Trader** — Virtual account with full position management, leverage control, and trade history
- Risk Calculator — Lot size calculator with trade behaviour review

**Markets & Analysis**
- Market Depth — OANDA sentiment, Binance order book, COT report, options flow
- Event Calendar — ForexFactory events + TradingView fallback + Finnhub news
- Trade Journal — Log trades, view P&L, get trade reviews
- Session Heatmap — Visual P&L breakdown by day and session (Sim + Journal)
- Price Alerts — Set price-level alerts on any instrument
- Chart Analysis — Upload any chart screenshot for analysis
- Checklist — Pre-trade checklist

**Settings**
- All API keys (Claude, Twelve Data, Grok, Gemini Flash, Finnhub)
- Default balance and risk percentage
- Data reset

---

## Credits & Data Sources

- **Analysis Engine:** [Anthropic Claude](https://anthropic.com) (claude-haiku-4-5)
- **Sentiment:** [xAI Grok](https://x.ai) / [Google Gemini Flash](https://aistudio.google.com)
- **Live Candles:** [Twelve Data](https://twelvedata.com)
- **Charts:** [TradingView Widget](https://tradingview.com)
- **Economic Calendar:** [ForexFactory](https://forexfactory.com) + TradingView fallback
- **News:** [Finnhub](https://finnhub.io) (Bloomberg, Reuters, CNBC, MarketWatch aggregation)
- **Retail Sentiment:** [OANDA](https://oanda.com) open positions
- **Order Book:** [Binance](https://binance.com) REST API
- **COT Data:** [CFTC](https://cftc.gov) Commitment of Traders
- **Options Flow:** [CBOE](https://cboe.com) delayed quotes
- **Price Fallback:** [Yahoo Finance](https://finance.yahoo.com)

---

## Disclaimer

Wingman is an analytical tool, not financial advice. All analysis, setups, and signals are for informational purposes only. Trading leveraged instruments carries significant risk of loss. Past performance of any analysis does not guarantee future results. Always apply your own judgement and risk management. Never risk more than you can afford to lose.

---

## License

MIT — fork it, modify it, deploy your own instance. Attribution appreciated but not required.

---

*Built as a solo project. Feedback and pull requests welcome.*
