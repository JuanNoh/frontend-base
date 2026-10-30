import { Moon, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { useChipsDemo } from '../../hooks/useChipsDemo';
import { useSpotlight } from '../../hooks/useSpotlight';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import {
	cardLabelStyles,
	cardValueStyles,
	glassCardStyles,
	liveStatusStyles,
	orbStyles,
} from '../cards-demo/cards-demo.styles';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	balancedTitleStyles,
	chipEnterStyles,
	effectActionsStyles,
	effectChipsStyles,
	effectDescriptionStyles,
	effectStageStyles,
	effectsGridStyles,
	liveChipStyles,
	monthCardStyles,
	spotlightCopyHintStyles,
	spotlightCopyStyles,
	spotlightCopyTitleStyles,
} from './effects-demo.styles';

const MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT'];

const NATIVE = [
	'color-mix()',
	':has()',
	'@container',
	'popover',
	'<dialog>',
	'@starting-style',
];

export function EffectsDemo() {
	const spotlight = useSpotlight();
	const chips = useChipsDemo();
	const theme = useThemeToggle();

	return (
		<div className={effectsGridStyles()}>
			<DemoCard title="Vidrio líquido">
				<div className={effectStageStyles()}>
					<span className={orbStyles({ hue: 'brand', position: 'a' })} />
					<span className={orbStyles({ hue: 'violet', position: 'b' })} />
					<span className={orbStyles({ hue: 'orange', position: 'c' })} />
					<div className={glassCardStyles()}>
						<p className={cardLabelStyles()}>Saldo en bancos</p>
						<p className={cardValueStyles()}>$482,310.55</p>
					</div>
				</div>
				<p className={effectDescriptionStyles()}>
					Como macOS 27: <code>backdrop-filter</code>, filo de luz y brillo
					arriba. Muévele al control «Vidrio» de Apariencia.
				</p>
			</DemoCard>
			<DemoCard title="Reflector">
				<div
					className={effectStageStyles({ kind: 'spotlight' })}
					onPointerMove={spotlight.onPointerMove}
				>
					<span className={spotlightCopyStyles()}>
						<b className={spotlightCopyTitleStyles()}>Pasa el cursor</b>
						<span className={spotlightCopyHintStyles()}>
							La luz sigue al puntero
						</span>
					</span>
				</div>
				<p className={effectDescriptionStyles()}>
					Degradado radial que lee <code>--mx</code> y <code>--my</code> del
					puntero.
				</p>
			</DemoCard>
			<DemoCard title="Borde vivo">
				<div className={effectStageStyles()}>
					<div data-live className={liveChipStyles()}>
						<div className={liveStatusStyles()}>
							<Spinner size="md" />
							<span>
								<small>Factura A-1043</small>
								<b>Timbrando con el PAC…</b>
							</span>
						</div>
					</div>
				</div>
				<p className={effectDescriptionStyles()}>
					<code>@property</code> anima el ángulo de un{' '}
					<code>conic-gradient</code>. Para estados «en proceso».
				</p>
			</DemoCard>
			<DemoCard title="Entrada con @starting-style">
				<div className={effectStageStyles()}>
					<div className={effectChipsStyles()}>
						{chips.chips.map((chip) => (
							<Badge
								key={chip.id}
								tone="primary"
								className={chipEnterStyles()}
							>
								{chip.label}
							</Badge>
						))}
					</div>
				</div>
				<div className={effectActionsStyles()}>
					<Button size="sm" variant="secondary" onClick={chips.add}>
						<Plus />
						Agregar
					</Button>
					<Button size="sm" variant="ghost" onClick={chips.reset}>
						Reiniciar
					</Button>
				</div>
			</DemoCard>
			<DemoCard title="Transición de vista">
				<div className={effectStageStyles({ kind: 'split' })}>
					<Button onClick={theme.toggle}>
						<Moon />
						Cambiar tema
					</Button>
				</div>
				<p className={effectDescriptionStyles()}>
					<code>startViewTransition()</code> revela el tema nuevo en un círculo
					desde el clic. Pasa en todo el template.
				</p>
			</DemoCard>
			<DemoCard title="Animación por scroll">
				<div className={effectStageStyles({ kind: 'scroll' })} tabIndex={0}>
					{MONTHS.map((month) => (
						<span key={month} className={monthCardStyles()}>
							{month}
						</span>
					))}
				</div>
				<p className={effectDescriptionStyles()}>
					<code>animation-timeline: view()</code>. La barra bajo el encabezado
					usa <code>scroll()</code>.
				</p>
			</DemoCard>
			<DemoCard title="Texto balanceado">
				<div className={effectStageStyles()}>
					<p className={balancedTitleStyles()}>
						El título largo se reparte parejo en dos líneas
					</p>
				</div>
				<p className={effectDescriptionStyles()}>
					<code>text-wrap: balance</code> en títulos y <code>pretty</code> en
					párrafos.
				</p>
			</DemoCard>
			<DemoCard title="Cero librería">
				<div className={effectStageStyles()}>
					<div className={effectChipsStyles()}>
						{NATIVE.map((feature, index) => (
							<Badge
								key={feature}
								tone={index === 0 ? 'primary' : 'neutral'}
							>
								{feature}
							</Badge>
						))}
					</div>
				</div>
				<p className={effectDescriptionStyles()}>
					Todo esto ya lo hace el navegador; Radix se queda por el teclado y la
					accesibilidad.
				</p>
			</DemoCard>
		</div>
	);
}
