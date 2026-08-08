import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonStyles } from './button.styles';

export type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonStyles> & {
		isSubmitting?: boolean;
	};
