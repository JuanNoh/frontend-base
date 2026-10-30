import { Avatar } from '@/components/ui/avatar/avatar.component';
import { Badge } from '@/components/ui/badge/badge.component';
import { cn } from '@/lib/utils/cn';
import {
	entityAmountStyles,
	entityCardStyles,
	entityFooterStyles,
	entityHeadStyles,
	entityIconStyles,
	entityMetaStyles,
	entityTitleStyles,
} from './entity-card.styles';
import type { EntityCardProps } from './entity-card.types';

export function EntityCard({
	title,
	subtitle,
	hue,
	icon: Icon,
	avatar,
	badge,
	meta,
	amount,
	actions,
	className,
}: EntityCardProps) {
	return (
		<article className={cn(entityCardStyles({ hue }), className)}>
			<div className={entityHeadStyles()}>
				{avatar && <Avatar {...avatar} size="md" hue={hue} />}
				{Icon && !avatar && (
					<span className={entityIconStyles()}>
						<Icon />
					</span>
				)}
				<div className={entityTitleStyles()}>
					<b>{title}</b>
					{subtitle && <small>{subtitle}</small>}
				</div>
				{badge && (
					<Badge tone={badge.tone} dot={badge.dot}>
						{badge.label}
					</Badge>
				)}
			</div>
			{meta && (
				<dl className={entityMetaStyles()}>
					{meta.map((item) => (
						<div key={item.label}>
							<dt>{item.label}</dt>
							<dd>{item.value}</dd>
						</div>
					))}
				</dl>
			)}
			{(amount || actions) && (
				<div className={entityFooterStyles()}>
					{amount && <span className={entityAmountStyles()}>{amount}</span>}
					{actions}
				</div>
			)}
		</article>
	);
}
