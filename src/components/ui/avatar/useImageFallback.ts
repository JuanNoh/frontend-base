import { useState } from 'react';

export function useImageFallback(src?: string) {
	const [failedSrc, setFailedSrc] = useState<string | undefined>();

	return {
		showImage: !!src && src !== failedSrc,
		onError: () => setFailedSrc(src),
	};
}
