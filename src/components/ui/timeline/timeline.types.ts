import type { VariantProps } from 'class-variance-authority';
import type { timelineDotStyles } from './timeline.styles';

export interface TimelineItem {
	title: string;
	hint?: string;
	tone?: VariantProps<typeof timelineDotStyles>['tone'];
}

export interface TimelineProps {
	items: TimelineItem[];
	className?: string;
}
