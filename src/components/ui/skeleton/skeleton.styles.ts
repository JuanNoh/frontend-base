import { cva } from 'class-variance-authority';

export const skeletonStyles = cva('shimmer', {
	variants: {
		shape: {
			line: 'h-3 rounded-full',
			block: 'rounded-card h-24',
			circle: 'size-10 rounded-full',
			tile: 'rounded-field size-10',
		},
	},
	defaultVariants: { shape: 'line' },
});
