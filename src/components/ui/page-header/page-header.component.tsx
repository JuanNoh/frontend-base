import { cn } from '@/lib/utils/cn';
import {
	pageHeaderActionsStyles,
	pageHeaderDescriptionStyles,
	pageHeaderEyebrowStyles,
	pageHeaderStyles,
	pageHeaderTextStyles,
	pageHeaderTitleStyles,
} from './page-header.styles';
import type { PageHeaderProps } from './page-header.types';

export function PageHeader({
	title,
	eyebrow,
	description,
	actions,
	className,
}: PageHeaderProps) {
	return (
		<header className={cn(pageHeaderStyles(), className)}>
			<div className={pageHeaderTextStyles()}>
				{eyebrow && <p className={pageHeaderEyebrowStyles()}>{eyebrow}</p>}
				<h1 className={pageHeaderTitleStyles()}>{title}</h1>
				{description && (
					<p className={pageHeaderDescriptionStyles()}>{description}</p>
				)}
			</div>
			{actions && <div className={pageHeaderActionsStyles()}>{actions}</div>}
		</header>
	);
}
