import { cva } from 'class-variance-authority';

export const verticalPickerStyles = cva(
	'rounded-seg bg-glass sticky top-[calc(3.5rem+10px)] z-10 w-fit max-w-full overflow-x-auto shadow-[0_6px_18px_-10px_var(--elev-3)] backdrop-blur-xl'
);
