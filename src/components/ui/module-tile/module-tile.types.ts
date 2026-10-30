import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import type { moduleTileStyles } from './module-tile.styles';

export type ModuleTileProps = ComponentProps<'a'> &
	VariantProps<typeof moduleTileStyles> & {
		label: string;
		description?: string;
		icon: LucideIcon;
		count?: number;
	};
