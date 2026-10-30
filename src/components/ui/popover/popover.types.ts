import type { ReactElement, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { popoverContentStyles } from './popover.styles';

export type PopoverProps = VariantProps<typeof popoverContentStyles> & {
	trigger: ReactElement;
	children: ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	align?: 'start' | 'center' | 'end';
	className?: string;
};
