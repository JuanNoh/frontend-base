import { motion } from 'motion/react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { INDICATOR_SPRING } from '@/lib/motion';
import {
	tabContentStyles,
	tabIndicatorStyles,
	tabLabelStyles,
	tabListStyles,
	tabsStyles,
	tabTriggerStyles,
} from './tabs.styles';
import type { TabsProps } from './tabs.types';
import { useTabs } from './useTabs';

export function Tabs({
	items,
	defaultValue,
	variant,
	className,
	'aria-label': ariaLabel,
}: TabsProps) {
	const { value, setValue, indicatorId } = useTabs(items, defaultValue);

	return (
		<TabsPrimitive.Root
			value={value}
			onValueChange={setValue}
			className={cn(tabsStyles(), className)}
		>
			<TabsPrimitive.List
				aria-label={ariaLabel}
				className={tabListStyles({ variant })}
			>
				{items.map((item) => (
					<TabsPrimitive.Trigger
						key={item.value}
						value={item.value}
						className={tabTriggerStyles({ variant })}
					>
						{item.value === value && (
							<motion.span
								layoutId={indicatorId}
								className={tabIndicatorStyles({ variant })}
								transition={INDICATOR_SPRING}
							/>
						)}
						<span className={tabLabelStyles()}>{item.label}</span>
					</TabsPrimitive.Trigger>
				))}
			</TabsPrimitive.List>
			{items.map((item) => (
				<TabsPrimitive.Content
					key={item.value}
					value={item.value}
					className={tabContentStyles()}
				>
					{item.content}
				</TabsPrimitive.Content>
			))}
		</TabsPrimitive.Root>
	);
}
