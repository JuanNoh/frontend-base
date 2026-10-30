import { cva } from 'class-variance-authority';

export const sparklineStyles = cva('group text-hue block overflow-visible');

export const sparklineAreaStyles = cva(
	'opacity-0 transition-opacity delay-500 duration-700 group-data-[visible]:opacity-100 motion-reduce:transition-none'
);

export const sparklineLineStyles = cva(
	'opacity-0 [stroke-dasharray:1] group-data-[visible]:animate-draw group-data-[visible]:opacity-100 motion-reduce:animate-none'
);

export const sparklineDotStyles = cva(
	'ease-spring origin-center scale-0 transition-[scale] delay-1000 duration-500 [transform-box:fill-box] group-data-[visible]:scale-100 motion-reduce:transition-none'
);

export const sparklinePulseStyles = cva(
	'origin-center opacity-0 [transform-box:fill-box] group-data-[visible]:animate-spark-pulse motion-reduce:hidden'
);
