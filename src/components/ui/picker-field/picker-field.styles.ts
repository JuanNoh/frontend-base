import { cva } from 'class-variance-authority';

export const pickerFieldTriggerStyles = cva(
	'data-[state=open]:bg-surface data-[state=open]:shadow-field-focus cursor-pointer text-left outline-none disabled:cursor-not-allowed disabled:opacity-55 [&>svg]:text-ink-muted [&>svg]:size-4 [&>svg]:shrink-0'
);

export const pickerFieldValueStyles = cva(
	'min-w-0 flex-1 truncate data-[empty]:text-ink-muted/80'
);
