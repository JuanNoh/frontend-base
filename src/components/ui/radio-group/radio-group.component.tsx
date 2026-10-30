import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	radioCardStyles,
	radioDescriptionStyles,
	radioGroupStyles,
	radioIndicatorStyles,
	radioItemStyles,
	radioLabelStyles,
} from './radio-group.styles';
import type { RadioGroupProps } from './radio-group.types';

export function RadioGroup({ options, className, ...rest }: RadioGroupProps) {
	return (
		<RadioGroupPrimitive.Root className={cn(radioGroupStyles(), className)} {...rest}>
			{options.map((option) => (
				<label key={option.value} className={radioCardStyles()}>
					<RadioGroupPrimitive.Item
						value={option.value}
						disabled={option.disabled}
						className={radioItemStyles()}
					>
						<RadioGroupPrimitive.Indicator
							className={radioIndicatorStyles()}
						/>
					</RadioGroupPrimitive.Item>
					<span>
						<span className={radioLabelStyles()}>{option.label}</span>
						{option.description && (
							<span className={radioDescriptionStyles()}>
								{option.description}
							</span>
						)}
					</span>
				</label>
			))}
		</RadioGroupPrimitive.Root>
	);
}
