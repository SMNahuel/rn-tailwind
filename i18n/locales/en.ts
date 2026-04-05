export default {
  markets: {
    header: { title: "Editorial Futurity" },
    hero: {
      heading: "Market",
      headingAccent: "Intelligence",
      subtitle:
        "Real-time institutional-grade data across global assets. Curated for the modern portfolio.",
    },
    searchPlaceholder: "Search markets...",
    filters: {
      topGainers: "Top Gainers",
      losers: "Losers",
      favorites: "Favorites",
    },
    tabs: { stocks: "Stocks", crypto: "Crypto", forex: "Forex" },
    volatility: {
      title: "Volatility Index",
      description:
        "Historically low levels. Stable market sentiment detected.",
    },
    status: {
      label: "Market Status",
      open: "NY Market Open",
      endsIn: "Ends in:",
    },
    trending: { title: "Trending Assets", viewAll: "VIEW ALL" },
    assetDetail: {
      notFound: "We could not find this asset.",
      backToMarkets: "Back to markets",
      volume24h: "Volume (24h)",
      high24h: "High (24h)",
      marketInsights: "Market Insights",
      technicalTitle: "Technical sentiment",
      rsiLabel: "Relative Strength (RSI)",
      sentimentBody:
        "Momentum around {{name}} points to a constructive tone. Monitor for exhaustion if price stretches too far above short-term averages.",
      ranges: {
        "1D": "1D",
        "1W": "1W",
        "1M": "1M",
        "1Y": "1Y",
        ALL: "ALL",
      },
      rsi: {
        strong: "Strong",
        neutral: "Neutral",
        weak: "Weak",
      },
      statsLabels: {
        marketCap: "Market cap",
        circulating: "Circulating supply",
        ath: "All-time high",
        rank: "Market rank",
        volumeAvg: "Avg volume",
        week52High: "52-week high",
        pe: "P/E ratio",
        sessionHigh: "Session high",
        sessionLow: "Session low",
        yearHigh: "52-week high",
        yearLow: "52-week low",
      },
      insights: {
        one: {
          category: "Institutional adoption",
          headline:
            "Major European bank launches digital asset custody for select clients.",
          time: "2h ago",
        },
        two: {
          category: "On-chain flows",
          headline:
            "Whale wallets show net accumulation for the third consecutive week.",
          time: "5h ago",
        },
        three: {
          category: "Macro",
          headline:
            "Soft CPI print reinforces risk-on tone across growth and crypto.",
          time: "1d ago",
        },
      },
    },
  },
  auth: {
    logo: "EF",
    title: "Welcome Back",
    subtitle: "Access your secure financial dashboard.",
    form: {
      emailLabel: "Digital Identity",
      emailPlaceholder: "name@domain.com",
      passwordLabel: "Security Token",
      passwordPlaceholder: "••••••••••••",
      forgot: "Forgot?",
    },
    actions: {
      authenticate: "Authenticate",
      divider: "Or connect with",
      google: "Google",
      apple: "Apple",
    },
    footer: {
      newUser: "New to the future?",
      createAccount: "Create Account",
    },
  },
} as const;
