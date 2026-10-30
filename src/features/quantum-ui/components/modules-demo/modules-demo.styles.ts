import { cva } from 'class-variance-authority';

export const modulesGridStyles = cva(
	'grid grid-cols-[repeat(auto-fill,minmax(min(100%,180px),1fr))] gap-3'
);
