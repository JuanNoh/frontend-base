import { Badge } from '@/components/ui/badge/badge.component';
import { SHADE_KEYS } from '@/lib/palette/palette.constants';
import { cn } from '@/lib/utils/cn';
import { useAccentScale } from '../../hooks/useAccentScale';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	foundationsGridStyles,
	radiiStyles,
	radiusSampleStyles,
	radiusShapeStyles,
	scaleStepStyles,
	scaleStyles,
	tokenGridStyles,
	tokenHintStyles,
	tokenNameStyles,
	tokenStyles,
	tokenSwatchStyles,
	tokenToneStyles,
	typeBodyGapStyles,
	typeBodyStyles,
	typeDisplayStyles,
	typeFigureStyles,
	typeHeadingStyles,
	typeLabelStyles,
	typeRowStyles,
} from './foundations-demo.styles';
import { accentStepStyle, neutralStepStyle } from './foundations-demo.utils';

const TOKENS = [
	{ name: 'surface-muted', hint: 'Página', tone: 'surfaceMuted' as const },
	{ name: 'surface', hint: 'Tarjetas', tone: 'surface' as const },
	{ name: 'ink', hint: 'Texto', tone: 'ink' as const },
	{ name: 'primary', hint: 'Acento', tone: 'primary' as const },
	{ name: 'success', hint: 'Pagada', tone: 'success' as const },
	{ name: 'warning', hint: 'Por cobrar', tone: 'warning' as const },
	{ name: 'danger', hint: 'Cancelada', tone: 'danger' as const },
	{ name: 'info', hint: 'PPD', tone: 'info' as const },
];

const RADII = [
	{ label: 'botón', shape: 'button' as const },
	{ label: 'campo', shape: 'field' as const },
	{ label: 'tarjeta', shape: 'card' as const },
	{ label: 'diálogo', shape: 'dialog' as const },
	{ label: 'sm', shape: 'shadowSm' as const },
	{ label: 'btn', shape: 'shadowBtn' as const },
	{ label: 'pop', shape: 'shadowPop' as const },
];

export function FoundationsDemo() {
	const accentScale = useAccentScale();

	return (
		<div className={foundationsGridStyles()}>
			<DemoCard
				title="Tu color y sus 11 tonos"
				aside={<Badge tone="primary">{accentScale}</Badge>}
			>
				<div className={scaleStyles()}>
					{SHADE_KEYS.map((name, index) => (
						<span
							key={name}
							className={scaleStepStyles()}
							style={accentStepStyle(name, index)}
						>
							{name}
						</span>
					))}
				</div>
				<div className={scaleStyles()}>
					{SHADE_KEYS.map((name, index) => (
						<span
							key={name}
							className={scaleStepStyles()}
							style={neutralStepStyle(name, index)}
						>
							{name}
						</span>
					))}
				</div>
				<div className={tokenGridStyles()}>
					{TOKENS.map((token) => (
						<div key={token.name} className={tokenStyles()}>
							<span
								className={cn(
									tokenSwatchStyles(),
									tokenToneStyles({ tone: token.tone })
								)}
							/>
							<span>
								<span className={tokenNameStyles()}>{token.name}</span>
								<span className={tokenHintStyles()}>{token.hint}</span>
							</span>
						</div>
					))}
				</div>
			</DemoCard>
			<DemoCard
				title="Tipografía"
				aside={<Badge>Geist + Plex Mono</Badge>}
				bodyClassName={typeBodyGapStyles()}
			>
				<div className={typeRowStyles()}>
					<span className={typeLabelStyles()}>Título · 28/600</span>
					<span className={typeDisplayStyles()}>Cierre de octubre</span>
				</div>
				<div className={typeRowStyles()}>
					<span className={typeLabelStyles()}>Sección · 17/600</span>
					<span className={typeHeadingStyles()}>Facturas por cobrar</span>
				</div>
				<div className={typeRowStyles()}>
					<span className={typeLabelStyles()}>Cuerpo · 14/400</span>
					<span className={typeBodyStyles()}>
						El IVA trasladado se acredita cuando el cliente paga.
					</span>
				</div>
				<div className={typeRowStyles()}>
					<span className={typeLabelStyles()}>Cifra · mono</span>
					<span className={typeFigureStyles()}>$1,284,560.00</span>
				</div>
				<div className={typeRowStyles()}>
					<span className={typeLabelStyles()}>Radios y sombras</span>
					<div className={radiiStyles()}>
						{RADII.map((radius) => (
							<span
								key={radius.label}
								className={cn(
									radiusSampleStyles(),
									radiusShapeStyles({ shape: radius.shape })
								)}
							>
								{radius.label}
							</span>
						))}
					</div>
				</div>
			</DemoCard>
		</div>
	);
}
