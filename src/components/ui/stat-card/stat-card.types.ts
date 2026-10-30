import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import type { statCardDeltaStyles, statCardStyles } from './stat-card.styles';

export type StatCardProps = VariantProps<typeof statCardStyles> & {
	label: string;
	value: ReactNode;
	icon: LucideIcon;
	delta?: string;
	trend?: VariantProps<typeof statCardDeltaStyles>['trend'];
	series?: number[];
	className?: string;
};
