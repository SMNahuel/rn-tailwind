import { type ComponentType, createElement, forwardRef } from 'react';
import type { TextProps } from 'react-native';

import { cssInterop } from 'nativewind';

const LeanText = forwardRef((props, ref) => {
	return createElement('RCTText', { ...props, ref });
}) as ComponentType<TextProps>;

LeanText.displayName = 'RCTText';

cssInterop(LeanText, {
	className: {
		target: 'style'
	}
});

export { LeanText };
