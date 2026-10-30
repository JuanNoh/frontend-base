import type { ReactElement, ReactNode } from 'react';

export interface MenuItem {
	label: string;
	icon?: ReactNode;
	shortcut?: string;
	tone?: 'default' | 'danger';
	disabled?: boolean;
	onSelect?: () => void;
}

export interface DropdownMenuProps {
	trigger: ReactElement;
	groups: MenuItem[][];
	label?: string;
	align?: 'start' | 'center' | 'end';
}
