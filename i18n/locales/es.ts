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
