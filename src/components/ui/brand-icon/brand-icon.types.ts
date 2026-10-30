import type { ComponentProps } from 'react';

export type BrandName = 'google' | 'microsoft';

export type BrandIconProps = Omit<ComponentProps<'svg'>, 'children' | 'viewBox'> & {
	brand: BrandName;
};

export interface BrandMark {
	viewBox: string;
	paths: { d: string; fill: string }[];
}
