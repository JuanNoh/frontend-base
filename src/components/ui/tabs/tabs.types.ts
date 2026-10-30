import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { tabListStyles } from './tabs.styles';

export interface TabItem {
	value: string;
	label: ReactNode;
	content: ReactNode;
}

export type TabsProps = VariantProps<typeof tabListStyles> & {
	items: TabItem[];
	defaultValue?: string;
	'aria-label'?: string;
	className?: string;
};
