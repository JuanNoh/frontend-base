import { useState } from 'react';
import { toast } from 'sonner';

export function useStampDemo() {
	const [isStamping, setIsStamping] = useState(false);

	const stamp = () => {
		setIsStamping(true);
		setTimeout(() => {
			setIsStamping(false);
			toast.success('Factura timbrada', { description: 'A-1043 · UUID 9F3C…A21E' });
		}, 1400);
	};

	return { isStamping, stamp };
}
