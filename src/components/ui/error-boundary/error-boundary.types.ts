import type { ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryProps {
	children: ReactNode;
	title?: string;
	description?: string;
	onError?: (error: Error, info: ErrorInfo) => void;
	className?: string;
}

export interface ErrorBoundaryState {
	hasError: boolean;
}
