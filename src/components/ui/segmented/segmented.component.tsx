import { useId } from 'react';
import { motion } from 'motion/react';
import { ToggleGroup } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { INDICATOR_SPRING } from '@/lib/motion';
import {
	segmentedIndicatorStyles,
	segmentedItemStyles,
	segmentedLabelStyles,
	segmentedStyles,
} from './segmented.styles';
import type { SegmentedProps } from './segmented.types';
import { keepSelection } from './segmented.utils';

export function Segmented<T extends string>({
	value,
	onValueChange,
	options,
	className,
	...rest
}: SegmentedProps<T>) {
	const indicatorId = useId();

	return (
		<ToggleGroup.Root
			type="single"
			value={value}
			onValueChange={keepSelection(onValueChange)}
			className={cn(segmentedStyles(), className)}
			{...rest}
		>
			{options.map((option) => (
				<ToggleGroup.Item
					key={option.value}
					value={option.value}
					aria-label={option.ariaLabel}
					className={segmentedItemStyles()}
				>
					{option.value === value && (
						<motion.span
							layoutId={indicatorId}
							className={segmentedIndicatorStyles()}
							transition={INDICATOR_SPRING}
						/>
					)}
					<span className={segmentedLabelStyles()}>{option.label}</span>
				</ToggleGroup.Item>
			))}
		</ToggleGroup.Root>
	);
}
