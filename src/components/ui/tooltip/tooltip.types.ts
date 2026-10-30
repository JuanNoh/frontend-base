import type { ReactElement, ReactNode } from 'react';

export interface TooltipProps {
	content: ReactNode;
	children: ReactElement;
	side?: 'top' | 'right' | 'bottom' | 'left';
}
