import { cn } from '@/lib/utils/cn';
import { badgeStyles } from './badge.styles';
import type { BadgeProps } from './badge.types';

export function Badge({ tone, dot, className, ...rest }: BadgeProps) {
	return <span className={cn(badgeStyles({ tone, dot }), className)} {...rest} />;
}
