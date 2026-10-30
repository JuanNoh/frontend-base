import { useState } from 'react';

export function useFieldsDemo() {
	const [issuedAt, setIssuedAt] = useState<Date>(() => new Date(2026, 9, 29));
	const [provider, setProvider] = useState<string | undefined>();
	const [tags, setTags] = useState<string[]>(['hoteleria', 'credito-30']);

	return { issuedAt, setIssuedAt, provider, setProvider, tags, setTags };
}
