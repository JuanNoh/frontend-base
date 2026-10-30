import { Slider as SliderPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	sliderRangeStyles,
	sliderStyles,
	sliderThumbStyles,
	sliderTrackStyles,
} from './slider.styles';
import type { SliderProps } from './slider.types';

export function Slider({ className, gradient, thumbLabel, ...rest }: SliderProps) {
	const thumbs = rest.value ?? rest.defaultValue ?? [0];
	const hasGradient = Boolean(gradient);

	return (
		<SliderPrimitive.Root className={cn(sliderStyles(), className)} {...rest}>
			<SliderPrimitive.Track
				className={sliderTrackStyles({ gradient: hasGradient })}
				style={gradient ? { background: gradient } : undefined}
			>
				<SliderPrimitive.Range
					className={sliderRangeStyles({ gradient: hasGradient })}
				/>
			</SliderPrimitive.Track>
			{thumbs.map((_, index) => (
				<SliderPrimitive.Thumb
					key={index}
					aria-label={thumbLabel}
					className={sliderThumbStyles()}
				/>
			))}
		</SliderPrimitive.Root>
	);
}
