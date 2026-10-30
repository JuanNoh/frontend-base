import type { ChangeEventHandler, Ref } from 'react';
import type { InputProps } from '@/components/ui/input/input.types';
import type { MxIdKind } from '@/lib/mx-ids/mx-ids.types';

export type MxIdInputProps = Omit<
	InputProps,
	'trailing' | 'below' | 'maxLength' | 'inputMode'
> & {
	kind: MxIdKind;
};

export type MxIdStatus = 'empty' | 'typing' | 'valid' | 'invalid';

export type MxIdPartState = 'idle' | 'current' | 'done' | 'valid' | 'invalid';

export interface UseMxIdInputOptions {
	kind: MxIdKind;
	value?: InputProps['value'];
	ref?: Ref<HTMLInputElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	hint?: string;
}
