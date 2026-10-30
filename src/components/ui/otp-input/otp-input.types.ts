export interface OtpInputProps {
	value: string;
	onValueChange: (value: string) => void;
	onComplete?: (value: string) => void;
	length?: number;
	label?: string;
	hint?: string;
	error?: string;
	id?: string;
	disabled?: boolean;
	className?: string;
}

export type UseOtpInputOptions = Pick<
	OtpInputProps,
	'value' | 'onValueChange' | 'onComplete'
> & { length: number };
