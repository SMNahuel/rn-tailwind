export type AssetType = 'stock' | 'crypto' | 'forex';
export type ThemeType = 'dark' | 'light';

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