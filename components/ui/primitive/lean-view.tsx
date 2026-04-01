import { type ComponentType, createElement, forwardRef } from 'react';
import type { ViewProps } from 'react-native';

import { cssInterop } from 'nativewind';

const LeanView = forwardRef((props, ref) => {
	return createElement('RCTView', { ...props, ref });
}) as ComponentType<ViewProps>;

LeanView.displayName = 'RCTView';

cssInterop(LeanView, {
	className: {
		target: 'style'
	}
});

export { LeanView };
