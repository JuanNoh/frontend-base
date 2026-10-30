import { cn } from '@/lib/utils/cn';
import {
	authBrandMarkStyles,
	authBrandStyles,
	authBrandTextStyles,
} from './auth-brand.styles';
import type { AuthBrandProps } from './auth-brand.types';

export function AuthBrand({ size, showName = true, className }: AuthBrandProps) {
	return (
		<div className={cn(authBrandStyles(), className)}>
			<span aria-hidden="true" className={authBrandMarkStyles({ size })}>
				FB
			</span>
			{showName && (
				<span className={authBrandTextStyles()}>
					<b>Frontend Base</b>
					<small>Plantilla 2026</small>
				</span>
			)}
		</div>
	);
}
