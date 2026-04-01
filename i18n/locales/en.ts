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
