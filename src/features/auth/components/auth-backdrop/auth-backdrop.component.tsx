import {
	authBackdropDiscStyles,
	authBackdropRingStyles,
	authBackdropStyles,
} from './auth-backdrop.styles';

export function AuthBackdrop() {
	return (
		<div aria-hidden="true" className={authBackdropStyles()}>
			<span className={authBackdropRingStyles({ size: 'lg' })} />
			<span className={authBackdropRingStyles({ size: 'md' })} />
			<span className={authBackdropRingStyles({ size: 'sm' })} />
			<span className={authBackdropDiscStyles()} />
		</div>
	);
}
