import { cva } from 'class-variance-authority';

export const appShellStyles = cva(
	'min-h-full lg:grid lg:transition-[grid-template-columns] lg:duration-300 lg:ease-out motion-reduce:transition-none',
	{
		variants: {
			collapsed: {
				true: 'lg:grid-cols-[72px_minmax(0,1fr)]',
				false: 'lg:grid-cols-[264px_minmax(0,1fr)]',
			},
		},
		defaultVariants: { collapsed: false },
	}
);

export const appShellMainStyles = cva('flex min-w-0 flex-col');

export const appShellContentStyles = cva(
	'mx-auto w-full max-w-6xl px-4 pt-8 pb-24 sm:px-8'
);
