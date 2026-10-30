import { cva } from 'class-variance-authority';

export const radioGroupStyles = cva('grid gap-2.5 sm:grid-cols-2');

export const radioCardStyles = cva(
	'rounded-card border-line-soft bg-surface has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary-soft has-[:focus-visible]:ring-primary/30 flex cursor-pointer gap-3 border p-3.5 transition-colors has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:ring-3'
);

export const radioItemStyles = cva(
	'bg-field shadow-field data-[state=checked]:bg-primary mt-0.5 grid size-[18px] shrink-0 place-content-center rounded-full outline-none data-[state=checked]:shadow-none'
);

export const radioIndicatorStyles = cva(
	'bg-on-primary animate-in zoom-in-50 size-2 rounded-full'
);

export const radioLabelStyles = cva('block text-sm font-medium');

export const radioDescriptionStyles = cva('text-ink-muted block text-xs');
