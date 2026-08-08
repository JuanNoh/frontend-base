import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { spinnerStyles } from './spinner.styles';

export type SpinnerProps = ComponentProps<'span'> & VariantProps<typeof spinnerStyles>;
