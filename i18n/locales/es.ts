export default {
  markets: {
    header: { title: "Editorial Futurity" },
    hero: {
      heading: "Mercado",
      headingAccent: "Inteligente",
      subtitle:
        "Datos institucionales en tiempo real sobre activos globales. Diseñado para el portafolio moderno.",
    },
    searchPlaceholder: "Buscar mercados...",
    filters: {
      topGainers: "Mayores alzas",
      losers: "Mayores bajas",
      favorites: "Favoritos",
    },
    tabs: { stocks: "Acciones", crypto: "Cripto", forex: "Forex" },
    volatility: {
      title: "Índice de Volatilidad",
      description: "Niveles históricamente bajos. Sentimiento de mercado estable.",
    },
    status: {
      label: "Estado del Mercado",
      open: "Mercado NY Abierto",
      endsIn: "Cierra en:",
    },
    trending: { title: "Activos Tendencia", viewAll: "VER TODO" },
    assetDetail: {
      notFound: "No encontramos este activo.",
      backToMarkets: "Volver a mercados",
      volume24h: "Volumen (24h)",
      high24h: "Máximo (24h)",
      marketInsights: "Panorama del mercado",
      technicalTitle: "Sentimiento técnico",
      rsiLabel: "Fuerza relativa (RSI)",
      sentimentBody:
        "El momentum en torno a {{name}} sugiere un tono constructivo. Vigilá agotamiento si el precio se aleja demasiado de los promedios de corto plazo.",
      ranges: {
        "1D": "1D",
        "1W": "1S",
        "1M": "1M",
        "1Y": "1A",
        ALL: "TODO",
      },
      rsi: {
        strong: "Fuerte",
        neutral: "Neutro",
        weak: "Débil",
      },
      statsLabels: {
        marketCap: "Capitalización",
        circulating: "Suministro circulante",
        ath: "Máximo histórico",
        rank: "Ranking",
        volumeAvg: "Volumen prom.",
        week52High: "Máx. 52 sem.",
        pe: "Ratio P/E",
        sessionHigh: "Máx. de sesión",
        sessionLow: "Mín. de sesión",
        yearHigh: "Máx. 52 sem.",
        yearLow: "Mín. 52 sem.",
      },
      insights: {
        one: {
          category: "Adopción institucional",
          headline:
            "Un gran banco europeo lanza custodia de activos digitales para clientes seleccionados.",
          time: "hace 2h",
        },
        two: {
          category: "Flujos on-chain",
          headline:
            "Billeteras whale muestran acumulación neta por tercera semana seguida.",
          time: "hace 5h",
        },
        three: {
          category: "Macro",
          headline:
            "Un CPI más suave refuerza el tono risk-on en crecimiento y cripto.",
          time: "hace 1d",
        },
      },
    },
  },
  auth: {
    logo: "EF",
    title: "Bienvenido",
    subtitle: "Accedé a tu panel financiero seguro.",
    form: {
      emailLabel: "Identidad Digital",
      emailPlaceholder: "nombre@dominio.com",
      passwordLabel: "Token de Seguridad",
      passwordPlaceholder: "••••••••••••",
      forgot: "¿Olvidaste?",
    },
    actions: {
      authenticate: "Autenticar",
      divider: "O conectate con",
      google: "Google",
      apple: "Apple",
    },
    footer: {
      newUser: "¿Nuevo en el futuro?",
      createAccount: "Crear Cuenta",
    },
  },
} as const;
