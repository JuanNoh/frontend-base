import type { ReactElement, ReactNode } from 'react';

export interface RailTipProps {
	enabled: boolean;
	content: ReactNode;
	children: ReactElement;
}
