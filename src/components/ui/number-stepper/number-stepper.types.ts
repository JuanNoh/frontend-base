export interface NumberStepperProps {
	value: number;
	onValueChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	'aria-label': string;
	className?: string;
}
