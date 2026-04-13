# Wingman
Professional-grade financial markets trading intelligence tool — self-hosted, privacy-first, zero subscriptions

**Status:** Live | **Completion:** 82% | **Last updated:** 2026-04-13

## About

Wingman is a self-hosted financial markets trading intelligence tool covering 54 instruments across equities, forex, crypto, and commodities. It provides multi-timeframe technical analysis, real-time market depth, a virtual trading simulator, and a trade journal — all running locally with no SaaS subscriptions required. Built to give independent traders a professional-grade analysis environment that rivals expensive Bloomberg terminals while respecting user privacy by keeping all data local.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | JavaScript, HTML |
| Runtime | Browser-native |
| Charts | Lightweight Charts (TradingView) |
| Data | Public market APIs (Yahoo Finance, Alpha Vantage) |
| Storage | localStorage / IndexedDB |
| AI | Anthropic Claude API (trade commentary) |
| Infrastructure | Self-hosted / GitHub Pages |

## Features

| Feature | Description | Status |
|---------|-------------|--------|
| 54-instrument coverage | Equities, forex, crypto, commodities | ✅ Built |
| Multi-timeframe analysis | 1m / 5m / 15m / 1h / 4h / 1D / 1W charts | ✅ Built |
| Technical indicators | RSI, MACD, Bollinger Bands, EMA, SMA, VWAP | ✅ Built |
| Market depth view | Order book / bid-ask spread visualisation | ✅ Built |
| Virtual trading simulator | Paper trading with P&L tracking | ✅ Built |
| Trade journal | Log trades with entry/exit/notes and stats | ✅ Built |
| AI commentary | Claude-generated market insight per instrument | ✅ Built |
| Trading Academy | 7-stage structured progression system | ✅ Built |
| Behavioural Detectors | Six detectors monitoring trading psychology | ✅ Built |
| Performance Profiling | Win rate, R:R, profit factor, session heatmap | ✅ Built |
| Risk Calculator | Position sizing with AI sanity check | ✅ Built |
| Price Alerts | Configurable price notifications | ✅ Built |
| Economic Calendar | Forex Factory integration | ✅ Built |
| Chart Analysis | Screenshot upload for AI analysis | ✅ Built |
| Watchlist | Custom grouping and alert configuration | 📋 Planned |
| Screener | Filter instruments by indicator conditions | 📋 Planned |
| Export | CSV/PDF export of journal and performance stats | 📋 Planned |

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/osiabu/Wingman.git
cd Wingman

# Install dependencies (if any)
npm install
```

### Running the Application

```bash
# Start local development server
npm start

# Or simply open index.html in your browser
open index.html
```

### Configuration

1. Open the application in your browser
2. Navigate to Settings
3. Add your API keys for data providers (stored locally in localStorage)
4. Configure your preferred instruments and timeframes

## Roadmap

### Phase 1 — Core Platform
- Chart view for all 54 instruments
- Top 5 technical indicators
- Basic watchlist functionality

### Phase 2 — Intelligence Layer
- Virtual trading simulator
- Comprehensive trade journal
- AI-powered market commentary

### Phase 3 — Pro Features
- Advanced screener capabilities
- Configurable alerts system
- Export and reporting tools

---

**Osi Abu** — Full Stack AI Engineer | https://osiabu.vercel.app