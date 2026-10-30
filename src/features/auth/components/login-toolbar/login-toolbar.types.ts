import type { LoginVariant } from '../../types/auth.types';

export interface LoginToolbarProps {
	variant: LoginVariant;
	onVariantChange: (variant: LoginVariant) => void;
}
