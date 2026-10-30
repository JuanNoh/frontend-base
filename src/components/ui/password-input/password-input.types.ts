import type { InputProps } from '@/components/ui/input/input.types';

export type PasswordInputProps = Omit<InputProps, 'type' | 'trailing'>;
