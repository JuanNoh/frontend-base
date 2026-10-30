import { useState } from 'react';

export function useContentDemo() {
	const [account, setAccount] = useState('102');

	return { account, setAccount };
}
