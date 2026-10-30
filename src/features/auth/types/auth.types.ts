import type { BrandName } from '@/components/ui/brand-icon/brand-icon.types';
import type { LOGIN_VARIANTS } from '../schemas/login-search.schema';

export type LoginVariant = (typeof LOGIN_VARIANTS)[number];

export interface SocialProvider {
	id: BrandName;
	label: string;
}
