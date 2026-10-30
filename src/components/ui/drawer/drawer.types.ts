import type { ReactNode } from 'react';

export interface DrawerProps {
	open: boolean;
	onClose: () => void;
	title: string;
	eyebrow?: string;
	description?: string;
	children?: ReactNode;
	footer?: ReactNode;
}
