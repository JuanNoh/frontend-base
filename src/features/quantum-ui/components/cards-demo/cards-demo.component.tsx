import { TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Card } from '@/components/ui/card/card.component';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { StatCard } from '@/components/ui/stat-card/stat-card.component';
import { useSpotlight } from '../../hooks/useSpotlight';
import {
	cardBadgeStyles,
	cardLabelStyles,
	cardValueStyles,
	cardsGridStyles,
	glassCardStyles,
	glassStageStyles,
	interactiveCardStyles,
	interactiveTextStyles,
	liveCardStyles,
	liveStatusStyles,
	orbStyles,
	spotlightCardStyles,
	spotlightTextStyles,
	spotlightTitleStyles,
	sunkenCardStyles,
} from './cards-demo.styles';

export function CardsDemo() {
	const spotlight = useSpotlight();

	return (
		<div className={cardsGridStyles()}>
			<StatCard
				label="Sólida · ventas de octubre"
				value="$1,284,560"
				icon={TrendingUp}
				delta="12.4%"
				trend="up"
				series={[6, 9, 8, 14, 12, 18, 17, 23, 26]}
			/>
			<div className={glassStageStyles()}>
				<span className={orbStyles({ hue: 'brand', position: 'a' })} />
				<span className={orbStyles({ hue: 'violet', position: 'b' })} />
				<span className={orbStyles({ hue: 'orange', position: 'c' })} />
				<div className={glassCardStyles()}>
					<p className={cardLabelStyles()}>Vidrio · saldo en bancos</p>
					<p className={cardValueStyles()}>$482,310.55</p>
				</div>
			</div>
			<Card tone="sunken" className={sunkenCardStyles()}>
				<p className={cardLabelStyles()}>Hundida · por cobrar</p>
				<p className={cardValueStyles()}>$180,688</p>
				<Badge tone="warning" dot className={cardBadgeStyles()}>
					3 vencen esta semana
				</Badge>
			</Card>
			<div
				className={spotlightCardStyles()}
				onPointerMove={spotlight.onPointerMove}
			>
				<p className={spotlightTitleStyles()}>Reflector</p>
				<p className={spotlightTextStyles()}>
					La luz y el borde siguen al cursor.
				</p>
			</div>
			<div className={liveCardStyles()} data-live>
				<p className={cardLabelStyles()}>Borde vivo · en proceso</p>
				<div className={liveStatusStyles()}>
					<Spinner size="md" />
					<span>
						<small>Factura A-1043</small>
						<b>Timbrando con el PAC…</b>
					</span>
				</div>
			</div>
			<Card interactive className={interactiveCardStyles()}>
				<p className={cardLabelStyles()}>Interactiva</p>
				<p className={interactiveTextStyles()}>
					Se levanta y enciende el borde al pasar el cursor.
				</p>
				<Badge tone="primary" className={cardBadgeStyles()}>
					Abrir
				</Badge>
			</Card>
		</div>
	);
}
