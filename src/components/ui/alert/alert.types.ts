import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { alertStyles } from './alert.styles';

export type AlertProps = VariantProps<typeof alertStyles> & {
	title: string;
	children?: ReactNode;
	className?: string;
};
