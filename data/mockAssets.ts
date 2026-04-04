import { Asset } from '../types';

export const mockAssets: Asset[] = [
    {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC/USD',
        type: 'crypto',
        price: 65000,
        change: 2.3,
        isFavorite: false,
        isInWatchlist: true,
    },
    {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH/USD',
        type: 'crypto',
        price: 3200,
        change: -1.2,
        isFavorite: false,
        isInWatchlist: true,
    },
    {
        id: '3',
        name: 'Apple',
        symbol: 'AAPL',
        type: 'stock',
        price: 180,
        change: 0.5,
        isFavorite: false,
        isInWatchlist: true,
    },
    {
        id: '4',
        name: 'EUR/USD',
        symbol: 'EUR/USD',
        type: 'forex',
        price: 1.1,
        change: 0.2,
        isFavorite: false,
        isInWatchlist: true,
    },
];