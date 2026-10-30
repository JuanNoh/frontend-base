import { useQuery } from '@tanstack/react-query';
import { loadApiSource, loadDemoSource } from '../data/sources';
import type { SourceFileProps } from '../components/source-file/source-file.types';

export function useSourceFile({ kind, name }: SourceFileProps) {
	return useQuery({
		queryKey: ['source', kind, name],
		queryFn: () => (kind === 'demo' ? loadDemoSource(name) : loadApiSource(name)),
		staleTime: Infinity,
	});
}
