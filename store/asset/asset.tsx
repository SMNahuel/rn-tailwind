import { observable, computed } from '@legendapp/state';
import { mockAssets } from '../../data/mockAssets';
import { Asset } from '../../types';

export const market$ = observable({
    assets: mockAssets as Asset[],
});

export const watchlist$ = computed(() =>
    market$.assets.get().filter(a => a.isInWatchlist)
);

export const favorites$ = computed(() =>
    market$.assets.get().filter(a => a.isFavorite)
);

export const toggleFavorite = (id: string) => {
    market$.assets.set(prev =>
        prev.map(asset =>
            asset.id === id
                ? { ...asset, isFavorite: !asset.isFavorite }
                : asset
        )
    );
};