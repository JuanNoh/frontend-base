import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import {
	moduleTileArrowStyles,
	moduleTileCountStyles,
	moduleTileDescriptionStyles,
	moduleTileIconStyles,
	moduleTileStyles,
	moduleTileTitleStyles,
} from './module-tile.styles';
import type { ModuleTileProps } from './module-tile.types';

export function ModuleTile({
	label,
	description,
	icon: Icon,
	count,
	hue,
	className,
	...rest
}: ModuleTileProps) {
	return (
		<a className={cn(moduleTileStyles({ hue }), className)} {...rest}>
			<span className={moduleTileIconStyles()}>
				<Icon />
			</span>
			<span>
				<span className={moduleTileTitleStyles()}>{label}</span>
				{description && (
					<span className={moduleTileDescriptionStyles()}>{description}</span>
				)}
			</span>
			{count !== undefined && (
				<span className={moduleTileCountStyles()}>{count}</span>
			)}
			<ArrowUpRight className={moduleTileArrowStyles()} />
		</a>
	);
}
