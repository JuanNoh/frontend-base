import { cva } from 'class-variance-authority';

export const railScrimStyles = cva(
	'bg-scrim animate-in fade-in-0 fixed inset-0 z-30 hidden data-[open]:block lg:hidden'
);

export const railStyles = cva(
	'bg-rail text-rail-ink border-rail-line fixed inset-y-0 left-0 z-40 flex w-[272px] -translate-x-full flex-col gap-4 overflow-hidden border-r p-3 transition-transform duration-300 ease-out data-[open]:translate-x-0 motion-reduce:transition-none lg:sticky lg:top-0 lg:h-dvh lg:w-auto lg:translate-x-0'
);

export const railBrandStyles = cva(
	'flex items-center gap-2.5 pt-1 transition-[padding] duration-300 ease-out motion-reduce:transition-none',
	{
		variants: {
			collapsed: { true: 'px-2', false: 'px-1.5' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railLogoStyles = cva(
	'bg-primary text-on-primary grid size-8 shrink-0 place-items-center rounded-field font-mono text-xs font-semibold'
);

export const railTextStyles = cva(
	'min-w-0 text-left transition-opacity duration-200 motion-reduce:transition-none [&_b]:block [&_b]:truncate [&_b]:text-[13px] [&_b]:font-semibold [&_small]:text-rail-muted [&_small]:block [&_small]:truncate [&_small]:text-[11px]',
	{
		variants: {
			collapsed: { true: 'w-0 opacity-0', false: '' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railWorkspaceStyles = cva(
	'hover:bg-rail-hover flex w-full cursor-pointer items-center gap-2.5 rounded-[calc(var(--r-field)+4px)] border py-2.5 transition-[background-color,border-color,padding] duration-300 ease-out outline-none focus-visible:ring-3 focus-visible:ring-primary/30 motion-reduce:transition-none',
	{
		variants: {
			collapsed: {
				true: 'border-transparent px-[7px]',
				false: 'border-rail-line px-2.5',
			},
			static: {
				true: 'cursor-default hover:bg-transparent',
			},
		},
		defaultVariants: { collapsed: false },
	}
);

export const railWorkspaceIconStyles = cva(
	'hue-tile grid size-8 shrink-0 place-items-center rounded-field [&_svg]:size-4'
);

export const railChevronStyles = cva('text-rail-muted ml-auto size-4 shrink-0', {
	variants: {
		collapsed: { true: 'hidden', false: '' },
	},
	defaultVariants: { collapsed: false },
});

export const railSearchStyles = cva(
	'border-rail-line text-rail-muted hover:bg-rail-hover h-control flex w-full cursor-pointer items-center gap-2 rounded-field border text-[13px] transition-[background-color,padding] duration-300 ease-out outline-none focus-visible:ring-3 focus-visible:ring-primary/30 motion-reduce:transition-none [&>svg]:size-4 [&>svg]:shrink-0',
	{
		variants: {
			collapsed: { true: 'px-[15px]', false: 'px-3' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railSearchLabelStyles = cva(
	'truncate text-left transition-opacity duration-200 motion-reduce:transition-none',
	{
		variants: {
			collapsed: { true: 'w-0 opacity-0', false: 'flex-1' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railKbdStyles = cva(
	'border-rail-line ml-auto rounded-[5px] border px-1.5 py-0.5 font-mono text-[11px] leading-none',
	{
		variants: {
			collapsed: { true: 'hidden', false: '' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railNavStyles = cva(
	'-mx-3 flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-1 [scrollbar-color:var(--rail-line)_transparent] [scrollbar-width:thin]'
);

export const railGroupStyles = cva('flex flex-col gap-0.5');

export const railGroupLabelStyles = cva(
	'relative truncate px-2.5 pb-1 text-[11.5px] font-medium transition-colors duration-200 motion-reduce:transition-none',
	{
		variants: {
			collapsed: {
				true: 'before:bg-rail-line text-transparent before:absolute before:inset-x-2 before:top-1/2 before:h-px',
				false: 'text-rail-muted',
			},
		},
		defaultVariants: { collapsed: false },
	}
);

export const railLinkStyles = cva(
	'text-rail-ink hover:bg-rail-hover data-[status=active]:bg-rail-active data-[status=active]:[&_svg]:text-primary-strong data-[active]:[&>svg:first-child]:text-primary-strong flex w-full cursor-pointer items-center gap-2.5 rounded-field py-[7px] text-left text-[13px] opacity-85 transition-[background-color,opacity,padding] duration-300 ease-out outline-none hover:opacity-100 focus-visible:ring-3 focus-visible:ring-primary/30 data-[active]:opacity-100 data-[status=active]:font-semibold data-[status=active]:opacity-100 data-[status=active]:shadow-card motion-reduce:transition-none [&>svg]:size-4 [&>svg]:shrink-0',
	{
		variants: {
			collapsed: {
				true: 'data-[active]:bg-rail-active data-[active]:shadow-card aria-expanded:bg-rail-hover px-4',
				false: 'px-2.5',
			},
			nested: {
				true: 'before:bg-primary relative before:absolute before:inset-y-1.5 before:-left-[9px] before:w-px before:rounded-full before:opacity-0 before:transition-opacity focus-visible:ring-inset data-[status=active]:before:opacity-100',
				false: '',
			},
		},
		defaultVariants: { collapsed: false, nested: false },
	}
);

export const railLinkLabelStyles = cva(
	'truncate transition-opacity duration-200 motion-reduce:transition-none',
	{
		variants: {
			collapsed: { true: 'w-0 opacity-0', false: 'flex-1' },
		},
		defaultVariants: { collapsed: false },
	}
);

export const railCountStyles = cva('text-rail-muted font-mono text-[11px]', {
	variants: {
		collapsed: { true: 'hidden', false: '' },
	},
	defaultVariants: { collapsed: false },
});
