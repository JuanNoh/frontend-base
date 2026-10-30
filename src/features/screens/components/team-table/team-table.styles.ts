import { cva } from 'class-variance-authority';

export const teamPersonStyles = cva(
	'flex min-w-0 items-center gap-2.5 max-md:text-left [&_b]:block [&_b]:font-medium [&_small]:text-ink-muted [&_small]:block [&_small]:text-xs'
);
