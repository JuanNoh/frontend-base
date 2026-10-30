import { Component, type ErrorInfo } from 'react';
import { RotateCw, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { cn } from '@/lib/utils/cn';
import { errorBoundaryStyles } from './error-boundary.styles';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		this.props.onError?.(error, info);
	}

	retry = () => this.setState({ hasError: false });

	render() {
		const {
			children,
			title = 'Esta sección no se pudo mostrar',
			description = 'El resto de la página sigue funcionando.',
			className,
		} = this.props;

		if (!this.state.hasError) return children;

		return (
			<EmptyState
				icon={TriangleAlert}
				title={title}
				description={description}
				className={cn(errorBoundaryStyles(), className)}
				actions={
					<Button size="sm" variant="secondary" onClick={this.retry}>
						<RotateCw />
						Reintentar
					</Button>
				}
			/>
		);
	}
}
