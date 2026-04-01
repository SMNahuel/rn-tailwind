import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';

import { fontSizes } from '@/theme/typography';

const customFontSizes = Object.keys(fontSizes);
const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			'font-size': [
				{
					text: [
						'base',
						validators.isTshirtSize,
						validators.isArbitraryLength,
						...customFontSizes
					]
				}
			]
		}
	}
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
