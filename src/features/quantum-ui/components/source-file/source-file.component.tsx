import { CodeBlock } from '@/components/ui/code-block/code-block.component';
import { Skeleton } from '@/components/ui/skeleton/skeleton.component';
import { useSourceFile } from '../../hooks/useSourceFile';
import { sourceFileSkeletonStyles } from './source-file.styles';
import type { SourceFileProps } from './source-file.types';

export function SourceFile({ kind, name }: SourceFileProps) {
	const { data } = useSourceFile({ kind, name });
	const label = kind === 'demo' ? `${name}.component.tsx` : `${name}.types.ts`;

	return data === undefined ? (
		<Skeleton className={sourceFileSkeletonStyles()} />
	) : (
		<CodeBlock code={data} label={label} />
	);
}
