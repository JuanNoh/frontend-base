import { cn } from '@/lib/utils/cn';
import {
	emptyStateActionsStyles,
	emptyStateDescriptionStyles,
	emptyStateIconStyles,
	emptyStateStyles,
	emptyStateTitleStyles,
} from './empty-state.styles';
import type { EmptyStateProps } from './empty-state.types';

export function EmptyState({
	icon: Icon,
	title,
	description,
	actions,
	className,
}: EmptyStateProps) {
	return (
		<div className={cn(emptyStateStyles(), className)}>
			<span className={emptyStateIconStyles()}>
				<Icon />
			</span>
			<p className={emptyStateTitleStyles()}>{title}</p>
			{description && (
				<p className={emptyStateDescriptionStyles()}>{description}</p>
			)}
			{actions && <div className={emptyStateActionsStyles()}>{actions}</div>}
		</div>
	);
}
