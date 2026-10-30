import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
	'inline-flex cursor-pointer items-center justify-center gap-2 rounded-btn font-medium whitespace-nowrap outline-none select-none transition-[background,box-shadow,scale] duration-150 focus-visible:ring-3 focus-visible:ring-primary/30 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary:
					'liquid-rim rim-solid text-on-primary shadow-btn-brand [--fill:var(--brand)] hover:[--fill:var(--brand-hover)]',
				ink: 'liquid-rim rim-solid text-surface-muted shadow-btn [--fill:var(--text)] [--rim-hi:45%] [--rim-lo:25%] hover:[--fill:var(--ink-hover)]',
				secondary:
					'liquid-rim text-ink shadow-btn backdrop-blur-md backdrop-saturate-180 [--fill:var(--glass-fill)] hover:[--fill:var(--glass-hover)]',
				ghost: 'text-ink-muted hover:bg-ink/6 hover:text-ink',
				danger: 'liquid-rim text-danger shadow-btn [--fill:var(--bad-soft)] hover:[--fill:var(--bad-soft-hover)]',
				destructive:
					'liquid-rim rim-solid text-surface-muted shadow-btn [--fill:var(--bad)] [--rim-hi:70%] [--rim-lo:45%] hover:[--fill:var(--bad-hover)]',
				link: 'text-primary-strong underline-offset-4 hover:underline',
			},
			size: {
				sm: 'h-8 px-3 text-xs',
				md: 'h-control px-4 text-sm',
				lg: 'h-12 px-6 text-base',
				icon: 'size-control text-sm',
			},
			block: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	}
);
