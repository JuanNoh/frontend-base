import { cva } from 'class-variance-authority';

export const codeBlockStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken overflow-hidden border'
);

export const codeBlockHeaderStyles = cva(
	'border-line-soft text-ink-muted flex items-center justify-between gap-3 border-b py-1.5 pr-1.5 pl-3.5 font-mono text-xs'
);

export const codeBlockPreStyles = cva(
	'max-h-[calc(100vh-15rem)] overflow-auto p-3.5 font-mono text-xs leading-relaxed'
);

export const codeTokenStyles = cva('', {
	variants: {
		kind: {
			plain: '',
			comment: 'text-ink-muted',
			string: 'text-(--hue-teal)',
			keyword: 'text-primary-strong',
			tag: 'text-(--hue-blue)',
		},
	},
});
