import type { VariantProps } from 'class-variance-authority';
import type { skeletonStyles } from './skeleton.styles';

export type SkeletonProps = VariantProps<typeof skeletonStyles> & {
	className?: string;
};
