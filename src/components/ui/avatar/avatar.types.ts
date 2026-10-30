import type { VariantProps } from 'class-variance-authority';
import type { avatarStyles, avatarStatusStyles } from './avatar.styles';

export type AvatarProps = VariantProps<typeof avatarStyles> & {
	name: string;
	src?: string;
	status?: VariantProps<typeof avatarStatusStyles>['status'];
	className?: string;
};

export type AvatarGroupProps = Pick<AvatarProps, 'size' | 'className'> & {
	people: Pick<AvatarProps, 'name' | 'src' | 'hue'>[];
	max?: number;
};
