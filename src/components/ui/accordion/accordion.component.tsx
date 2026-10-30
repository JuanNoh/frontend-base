import { ChevronDown } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	accordionBodyStyles,
	accordionContentStyles,
	accordionItemStyles,
	accordionStyles,
	accordionTriggerStyles,
} from './accordion.styles';
import type { AccordionProps } from './accordion.types';

export function Accordion({ items, multiple, defaultOpen, className }: AccordionProps) {
	const mode = multiple
		? { type: 'multiple' as const, defaultValue: defaultOpen }
		: {
				type: 'single' as const,
				collapsible: true,
				defaultValue: defaultOpen?.[0],
			};

	return (
		<AccordionPrimitive.Root {...mode} className={cn(accordionStyles(), className)}>
			{items.map((item) => (
				<AccordionPrimitive.Item
					key={item.value}
					value={item.value}
					className={accordionItemStyles()}
				>
					<AccordionPrimitive.Header>
						<AccordionPrimitive.Trigger className={accordionTriggerStyles()}>
							{item.title}
							<ChevronDown />
						</AccordionPrimitive.Trigger>
					</AccordionPrimitive.Header>
					<AccordionPrimitive.Content className={accordionContentStyles()}>
						<div className={accordionBodyStyles()}>{item.content}</div>
					</AccordionPrimitive.Content>
				</AccordionPrimitive.Item>
			))}
		</AccordionPrimitive.Root>
	);
}
