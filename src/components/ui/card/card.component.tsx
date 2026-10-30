import { cn } from '@/lib/utils/cn';
import { cardStyles } from './card.styles';
import type { CardProps } from './card.types';

export function Card({ tone, padding, interactive, className, ...rest }: CardProps) {
	return (
		<div
			className={cn(cardStyles({ tone, padding, interactive }), className)}
			{...rest}
		/>
	);
}
