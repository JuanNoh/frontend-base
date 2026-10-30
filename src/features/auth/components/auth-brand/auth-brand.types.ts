import type { VariantProps } from 'class-variance-authority';
import type { authBrandMarkStyles } from './auth-brand.styles';

export type AuthBrandProps = VariantProps<typeof authBrandMarkStyles> & {
	showName?: boolean;
	className?: string;
};
