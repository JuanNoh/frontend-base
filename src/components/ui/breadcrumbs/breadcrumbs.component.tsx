import { Fragment } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import {
	breadcrumbLinkStyles,
	breadcrumbsStyles,
	breadcrumbStyles,
} from './breadcrumbs.styles';
import type { BreadcrumbsProps } from './breadcrumbs.types';

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
	return (
		<nav aria-label="Ruta" className={cn(breadcrumbsStyles(), className)}>
			{items.map((item, index) => {
				const isCurrent = index === items.length - 1;

				return (
					<Fragment key={item.label}>
						{index > 0 && <ChevronRight />}
						{item.to && !isCurrent ? (
							<Link to={item.to} className={breadcrumbLinkStyles()}>
								{item.label}
							</Link>
						) : (
							<span
								data-current={isCurrent || undefined}
								aria-current={isCurrent ? 'page' : undefined}
								className={breadcrumbStyles()}
							>
								{item.label}
							</span>
						)}
					</Fragment>
				);
			})}
		</nav>
	);
}
