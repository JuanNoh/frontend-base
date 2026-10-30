import { cva } from 'class-variance-authority';

export const routeProgressStyles = cva(
	'pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left rounded-r-full bg-[linear-gradient(90deg,var(--brand),var(--hue-teal))] shadow-[0_0_12px_color-mix(in_oklab,var(--brand)_60%,transparent)]'
);
