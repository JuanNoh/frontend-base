import { cva } from 'class-variance-authority';

export const railBranchTriggerStyles = cva(
	'group/branch data-[active]:data-[state=closed]:bg-rail-active data-[active]:data-[state=closed]:shadow-card [&>svg:last-child]:size-3.5'
);

export const railBranchChevronStyles = cva(
	'text-rail-muted ml-auto transition-transform duration-200 group-data-[state=open]/branch:rotate-90 motion-reduce:transition-none'
);

export const railBranchContentStyles = cva(
	'overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down motion-reduce:animate-none'
);

export const railBranchListStyles = cva(
	'border-rail-line ml-4.5 flex flex-col gap-0.5 border-l py-0.5 pl-2'
);
