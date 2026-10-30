import { cva } from 'class-variance-authority';

export const switchStyles = cva(
	'group bg-line shadow-track data-[state=checked]:bg-primary focus-visible:ring-primary/30 relative inline-flex h-[26px] w-[46px] shrink-0 cursor-pointer items-center rounded-full p-[3px] transition-colors duration-200 outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50'
);

export const switchThumbStyles = cva(
	'bg-knob shadow-knob ease-spring block h-5 w-[27px] rounded-full transition-[translate,width] duration-300 group-active:w-[31px] data-[state=checked]:translate-x-[13px] group-active:data-[state=checked]:translate-x-[9px]'
);
