import { Bomb } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { useFragileCard } from '../../hooks/useFragileCard';
import { fragileCardStyles } from './content-demo.styles';

export function FragileCard() {
	const { crash } = useFragileCard();

	return (
		<div className={fragileCardStyles()}>
			Si esta tarjeta falla, solo ella se cae.
			<Button size="sm" variant="secondary" onClick={crash}>
				<Bomb />
				Provocar un fallo
			</Button>
		</div>
	);
}
