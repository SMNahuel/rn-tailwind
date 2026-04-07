# my-expo-app

Aplicación móvil de seguimiento de mercados financieros (cripto, acciones y forex) construida con Expo y React Native.

---

## Tech Stack

| Categoría | Tecnología |
|---|---|
| Framework | [Expo](https://expo.dev) ~54 / React Native 0.81 |
| Lenguaje | TypeScript ~5.9 |
| Enrutamiento | [Expo Router](https://expo.github.io/router) ~6 (file-based) |
| Estilos | [NativeWind](https://www.nativewind.dev) (Tailwind CSS v3 para RN) |
| Estado global | [Legend State](https://legendapp.com/open-source/state/) v3 |
| Fetching / caché | [TanStack Query](https://tanstack.com/query) v5 |
| HTTP | Axios |
| Gráficos | [Victory Native](https://commerce.nearform.com/open-source/victory-native) + Skia |
| i18n | i18next + react-i18next (ES / EN auto-detectado) |
| Formularios | React Hook Form |
| Íconos | Lucide React Native + Material Community Icons |
| Animaciones | React Native Reanimated v4 + Worklets |

---

## Requisitos previos

- **Node.js** ≥ 20
- **Bun** ≥ 1.0 → [instalar Bun](https://bun.sh)
- **Expo CLI** (se instala junto con las deps, no hace falta global)
- Para iOS nativo: Xcode ≥ 15 + simulador
- Para Android nativo: Android Studio + emulador o dispositivo físico

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd my-expo-app

# 2. Instalar dependencias con bun
bun install
```

> `bun install` ejecuta automáticamente el `postinstall` que aplica los parches de `patch-package`.

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes claves:

```env
EXPO_PUBLIC_API_URL_TWELVE_DATA=https://api.twelvedata.com/
EXPO_PUBLIC_API_KEY_TWELVE_DATA=tu_api_key_aqui
```

> Las variables con prefijo `EXPO_PUBLIC_` quedan expuestas al bundle del cliente. Obtén tu API key gratuita en [twelvedata.com](https://twelvedata.com).

---

## Ejecutar la app

```bash
# Metro bundler (Expo Go / Development Build)
bun start

# iOS (requiere Xcode)
bun ios

# Android (requiere Android Studio)
bun android

# Web
bun web
```

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `bun start` | Inicia el servidor Metro |
| `bun ios` | Compila y lanza en simulador iOS |
| `bun android` | Compila y lanza en emulador Android |
| `bun web` | Inicia versión web con Expo |
| `bun run prebuild` | Genera carpetas `ios/` y `android/` nativas |
| `bun run lint` | ESLint + Prettier (modo check) |
| `bun run format` | ESLint --fix + Prettier --write |

---

## Estructura del proyecto

```
my-expo-app/
├── app/                        # Rutas (Expo Router — file-based routing)
│   ├── _layout.tsx             # Root layout: splash, providers, stack
│   ├── index.tsx               # Redirect inicial
│   ├── +not-found.tsx          # Pantalla 404
│   ├── global.css              # Estilos globales (NativeWind)
│   ├── (unauth)/               # Grupo sin autenticación
│   │   ├── _layout.tsx
│   │   └── index.tsx           # Pantalla de login / onboarding
│   └── (tabs)/                 # Grupo con Tab Bar
│       ├── _layout.tsx         # Configuración de tabs
│       ├── index.tsx
│       ├── profile.tsx         # Pantalla de perfil
│       └── markets/
│           ├── _layout.tsx
│           ├── index.tsx       # Lista de mercados (cripto / acciones / forex)
│           └── [id].tsx        # Detalle de un activo
│
├── api/                        # Capa de acceso a datos
│   ├── client/
│   │   └── index.ts            # Instancia Axios con interceptores
│   ├── crypto/
│   │   ├── useList.ts          # Hook React Query para lista de criptos
│   │   └── useList.query.ts    # Función fetch hacia Twelve Data
│   ├── forex/
│   │   ├── useList.ts
│   │   └── useList.query.ts
│   └── stock/
│       ├── useList.ts
│       └── useList.query.ts
│
├── components/                 # Componentes reutilizables
│   ├── index.ts                # Barrel exports
│   ├── SplashScreen.tsx        # Splash animado (7 s)
│   ├── ScreenContent.tsx       # Wrapper genérico de pantalla
│   ├── auth/
│   │   └── auth-header.tsx
│   ├── ui/
│   │   ├── primitive/          # Átomos (Button, Card, LeanText, LeanView)
│   │   ├── markets/            # Moléculas de mercados (Hero, SearchBar, RowItem, etc.)
│   │   ├── divider-with-label.tsx
│   │   ├── underlined-input.tsx
│   │   └── outline-icon-button.tsx
│   └── asset-detail/           # Sección de detalle de activo
│       ├── asset-detail-content.tsx
│       ├── asset-detail-header.tsx
│       ├── asset-detail-price-row.tsx
│       ├── asset-detail-stats-grid.tsx
│       ├── asset-identity-row.tsx
│       ├── asset-market-insights-section.tsx
│       ├── asset-price-chart.tsx
│       ├── chart-time-range-tabs.tsx
│       ├── chart-volume-high-row.tsx
│       ├── detail-stat-card.tsx
│       ├── market-insight-card.tsx
│       └── technical-sentiment-section.tsx
│
├── store/                      # Estado global (Legend State)
│   ├── asset/
│   │   └── asset.tsx           # market$, watchlist$, favorites$, toggleFavorite
│   └── user/
│       └── user.store.tsx      # state$ (watchList, theme, name, favorite)
│
├── providers/
│   ├── index.tsx               # SafeAreaProvider + QueryClientProvider
│   └── query-client.ts         # Configuración de TanStack Query
│
├── hooks/
│   └── useColors.ts            # Hook para colores JS (props que no aceptan className)
│
├── types/
│   └── index.ts                # Tipos globales (Asset, User, AssetType, etc.)
│
├── constants/
│   └── index.ts                # assetTypeTabs (stock / crypto / forex)
│
├── theme/                      # Design tokens
│   ├── colors.ts               # Paleta dark (primary #00E676, secondary #2979FF…)
│   ├── typography.ts
│   ├── borders.ts
│   ├── fonts.ts
│   ├── tailwind.extend.ts      # Extensión del tema Tailwind
│   └── index.ts
│
├── i18n/                       # Internacionalización
│   ├── index.ts                # Configuración i18next (auto-detecta idioma del dispositivo)
│   ├── types.ts
│   └── locales/
│       ├── en.ts               # Traducciones en inglés
│       └── es.ts               # Traducciones en español
│
├── data/                       # Datos mock (mockAssets, etc.)
├── lib/                        # Utilidades de librería (cn, cva…)
├── utils/                      # Utilidades generales
│   ├── clx.utils.ts
│   ├── logger.utils.ts
│   ├── normalize.utils.ts
│   └── startup.utils.ts        # Lógica de arranque (onAppStartup)
├── patches/                    # Parches de patch-package
│
├── app.json                    # Configuración Expo
├── babel.config.js             # Babel (NativeWind, module-resolver, worklets)
├── tailwind.config.ts          # Tailwind + NativeWind preset
├── tsconfig.json               # TypeScript strict + alias @/
├── metro.config.js             # Metro bundler config
└── package.json
```

---

## Arquitectura

### Enrutamiento
La app usa **Expo Router** (file-based). El flujo de navegación es:

```
app/index.tsx  →  redirect
      │
      ├── (unauth)/index.tsx   ← login / registro
      └── (tabs)/
            ├── markets/index.tsx   ← lista de activos
            ├── markets/[id].tsx    ← detalle del activo
            └── profile.tsx
```

La **tab bar** se oculta automáticamente cuando se navega a una ruta de detalle (`/markets/:id`).

### Estado global
Se usa **Legend State** (`@legendapp/state`) para estado reactivo de bajo nivel:

- `market$` → lista de activos, con `computed` para watchlist y favoritos
- `state$` (user store) → datos del usuario (watchList, theme, name, favorite)

### Fetching de datos
**TanStack Query** gestiona caché, loading y error states. Cada tipo de activo tiene su propio hook:

- `useListCrypto()` → `GET /cryptocurrencies` (Twelve Data)
- `useListStock()` → `GET /stocks` (Twelve Data)
- `useListForex()` → `GET /forex_pairs` (Twelve Data)

### Estilos
**NativeWind** es la única forma de aplicar estilos. No se usa `StyleSheet`. El tema oscuro está definido en `theme/colors.ts` y extendido en `tailwind.config.ts`.

### i18n
El idioma se detecta automáticamente del dispositivo. Soporta `en` y `es`. Los namespaces disponibles son `auth` y `markets`.

---

## Convenciones

- Estilos **siempre** con `className` (NativeWind), nunca `StyleSheet`
- Componentes divididos en piezas pequeñas y reutilizables
- `React.memo` en componentes de lista para evitar re-renders
- TypeScript estricto en todo el proyecto
- Alias `@/` apunta a la raíz del proyecto
