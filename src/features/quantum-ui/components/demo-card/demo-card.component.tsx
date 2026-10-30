import { cn } from '@/lib/utils/cn';
import {
	demoCardBodyStyles,
	demoCardHeaderStyles,
	demoCardStyles,
	demoCardTitleStyles,
} from './demo-card.styles';
import type { DemoCardProps } from './demo-card.types';

export function DemoCard({
	title,
	aside,
	children,
	className,
	bodyClassName,
}: DemoCardProps) {
	return (
		<div className={cn(demoCardStyles(), className)}>
			<div className={demoCardHeaderStyles()}>
				<h3 className={demoCardTitleStyles()}>{title}</h3>
				{aside}
			</div>
			<div className={cn(demoCardBodyStyles(), bodyClassName)}>{children}</div>
		</div>
	);
}
