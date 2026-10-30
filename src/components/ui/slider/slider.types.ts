import type { ComponentProps } from 'react';
import type { Slider as SliderPrimitive } from 'radix-ui';

export type SliderProps = ComponentProps<typeof SliderPrimitive.Root> & {
	gradient?: string;
	thumbLabel?: string;
};
