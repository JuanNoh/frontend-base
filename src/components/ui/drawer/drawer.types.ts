import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { drawerContentStyles } from './drawer.styles';

export type DrawerProps = VariantProps<typeof drawerContentStyles> & {
	open: boolean;
	onClose: () => void;
	title: string;
	eyebrow?: string;
	description?: string;
	children?: ReactNode;
	footer?: ReactNode;
};
