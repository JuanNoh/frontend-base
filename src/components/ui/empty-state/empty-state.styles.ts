import { cva } from 'class-variance-authority';

export const emptyStateStyles = cva(
	'flex flex-col items-center gap-3 px-4 py-10 text-center'
);

export const emptyStateIconStyles = cva(
	'hue-tile rounded-card grid size-13 place-items-center [&_svg]:size-6'
);

export const emptyStateTitleStyles = cva('text-[15px] font-semibold');

export const emptyStateDescriptionStyles = cva(
	'text-ink-muted max-w-sm text-sm text-pretty'
);

export const emptyStateActionsStyles = cva('mt-1 flex flex-wrap justify-center gap-2');
