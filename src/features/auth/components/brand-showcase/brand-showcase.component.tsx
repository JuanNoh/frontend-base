import { ChartLine, ShieldCheck, TrendingUp, UsersRound, Wallet } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Card } from '@/components/ui/card/card.component';
import { StatCard } from '@/components/ui/stat-card/stat-card.component';
import { AuthBrand } from '../auth-brand/auth-brand.component';
import {
	brandStatsStyles,
	showcaseIconStyles,
	showcaseIntroStyles,
	showcaseItemStyles,
	showcaseLedeStyles,
	showcaseListStyles,
	showcasePreviewHeaderStyles,
	showcasePreviewStyles,
	showcaseStyles,
	showcaseTitleStyles,
} from './brand-showcase.styles';
import type { ShowcaseHighlight } from './brand-showcase.types';

const HIGHLIGHTS: ShowcaseHighlight[] = [
	{ icon: ShieldCheck, text: 'Entra con Google, Microsoft o tu correo de trabajo' },
	{ icon: ChartLine, text: 'Indicadores al día sin capturar dos veces' },
	{ icon: UsersRound, text: 'Tu equipo con permisos por rol' },
];

export function BrandShowcase() {
	return (
		<aside className={showcaseStyles()}>
			<AuthBrand />
			<div className={showcaseIntroStyles()}>
				<p className={showcaseTitleStyles()}>
					Tu negocio en orden <span>y a la vista.</span>
				</p>
				<p className={showcaseLedeStyles()}>
					Todo tu negocio en un mismo lugar, con cifras que se actualizan solas.
				</p>
				<ul className={showcaseListStyles()}>
					{HIGHLIGHTS.map(({ icon: Icon, text }) => (
						<li key={text} className={showcaseItemStyles()}>
							<span className={showcaseIconStyles()}>
								<Icon />
							</span>
							{text}
						</li>
					))}
				</ul>
			</div>
			<Card tone="glass" padding="sm" className={showcasePreviewStyles()}>
				<div className={showcasePreviewHeaderStyles()}>
					Resumen de octubre
					<Badge tone="success" dot>
						Al día
					</Badge>
				</div>
				<div className={brandStatsStyles()}>
					<StatCard
						label="Ventas"
						value="$1,284,560"
						icon={TrendingUp}
						delta="12.4%"
						trend="up"
						series={[6, 9, 8, 14, 12, 18, 17, 23, 26]}
					/>
					<StatCard
						label="Cobranza"
						value="$642,310"
						icon={Wallet}
						delta="8.1%"
						trend="up"
						series={[9, 11, 10, 13, 12, 15, 17, 16, 20]}
					/>
				</div>
			</Card>
		</aside>
	);
}
