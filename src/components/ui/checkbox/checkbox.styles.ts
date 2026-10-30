import { cva } from 'class-variance-authority';

export const checkboxStyles = cva(
	'group bg-field shadow-field rounded-check text-on-primary data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary focus-visible:ring-primary/30 grid size-[18px] shrink-0 cursor-pointer place-content-center transition-colors outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:shadow-none data-[state=indeterminate]:shadow-none'
);

export const checkboxIndicatorStyles = cva('animate-in zoom-in-50 duration-150');

export const checkboxIconStyles = cva('hidden size-3.5', {
	variants: {
		state: {
			checked: 'group-data-[state=checked]:block',
			indeterminate: 'group-data-[state=indeterminate]:block',
		},
	},
});
