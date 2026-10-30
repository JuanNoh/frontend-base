import { useEffect, useMemo, useState } from 'react';
import { tokenizeCode } from './code-block.utils';

const COPIED_MS = 1800;

export function useCodeBlock(code: string) {
	const [isCopied, setIsCopied] = useState(false);
	const tokens = useMemo(() => tokenizeCode(code), [code]);

	useEffect(() => {
		if (!isCopied) return;
		const timer = window.setTimeout(() => setIsCopied(false), COPIED_MS);
		return () => window.clearTimeout(timer);
	}, [isCopied]);

	return {
		tokens,
		isCopied,
		copy: async () => {
			await navigator.clipboard.writeText(code);
			setIsCopied(true);
		},
	};
}
