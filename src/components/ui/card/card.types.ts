import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { cardStyles } from './card.styles';

export type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles>;
