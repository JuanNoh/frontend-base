import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { badgeStyles } from './badge.styles';

export type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles>;
