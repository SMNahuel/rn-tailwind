export type AssetType = 'stock' | 'crypto' | 'forex';

/** Rangos del gráfico de histórico en detalle de activo */
export type ChartTimeRange = '1D' | '1W' | '1M' | '1Y' | 'ALL';
export type ThemeType = 'dark' | 'light';
export type AssetFilterType = 'topGainers' | 'topLosers' | 'topFavorites';

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  type: AssetType;

  price: number;
  change: number;

  isFavorite: boolean;
  isInWatchlist: boolean;
}

export interface User {
  watchlist: []
  favorite: [],
  theme: ThemeType,
  name: String
}