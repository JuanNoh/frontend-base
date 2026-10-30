import { cva } from 'class-variance-authority';

export const breadcrumbsStyles = cva(
	'text-ink-muted flex min-w-0 items-center gap-1.5 text-sm [&>svg]:size-3.5 [&>svg]:shrink-0 [&>svg]:max-sm:hidden'
);

export const breadcrumbStyles = cva(
	'truncate not-data-[current]:max-sm:hidden data-[current]:text-ink data-[current]:font-medium'
);

export const breadcrumbLinkStyles = cva(
	'hover:text-ink truncate transition-colors max-sm:hidden'
);
