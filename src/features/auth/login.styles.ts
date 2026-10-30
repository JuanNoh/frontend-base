import { cva } from 'class-variance-authority';

export const loginPageStyles = cva('relative isolate flex min-h-dvh flex-col', {
	variants: {
		variant: {
			dividido: 'bg-surface',
			vidrio: 'bg-surface-muted',
			minimo: 'bg-surface',
		},
	},
});
