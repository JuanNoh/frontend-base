import { initials } from '@/lib/format';
import { cn } from '@/lib/utils/cn';
import {
	avatarGroupItemStyles,
	avatarGroupStyles,
	avatarImageStyles,
	avatarStatusStyles,
	avatarStyles,
} from './avatar.styles';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';
import { useImageFallback } from './useImageFallback';

export function Avatar({ name, src, size, hue, status, className }: AvatarProps) {
	const image = useImageFallback(src);

	return (
		<span
			role="img"
			aria-label={name}
			className={cn(avatarStyles({ size, hue }), className)}
		>
			{image.showImage ? (
				<img
					src={src}
					alt=""
					onError={image.onError}
					className={avatarImageStyles()}
				/>
			) : (
				initials(name)
			)}
			{status && <span className={avatarStatusStyles({ status })} />}
		</span>
	);
}

export function AvatarGroup({ people, max = 4, size, className }: AvatarGroupProps) {
	const shown = people.slice(0, max);
	const rest = people.length - shown.length;

	return (
		<div className={cn(avatarGroupStyles(), className)}>
			{shown.map((person) => (
				<Avatar
					key={person.name}
					{...person}
					size={size}
					className={avatarGroupItemStyles()}
				/>
			))}
			{rest > 0 && (
				<span
					className={cn(avatarStyles({ size }), avatarGroupItemStyles())}
				>{`+${rest}`}</span>
			)}
		</div>
	);
}
