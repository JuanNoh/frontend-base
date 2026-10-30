import { cn } from '@/lib/utils/cn';
import { skeletonStyles } from './skeleton.styles';
import type { SkeletonProps } from './skeleton.types';

export function Skeleton({ shape, className }: SkeletonProps) {
	return (
		<div aria-hidden="true" className={cn(skeletonStyles({ shape }), className)} />
	);
}
