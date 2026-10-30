import { AnimatePresence, motion } from 'motion/react';
import { Cake, Check, Fingerprint, Minus, Plus, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { RollingNumber } from '@/components/ui/rolling-number/rolling-number.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import { initials } from '@/lib/format';
import { INDICATOR_SPRING } from '@/lib/motion';
import { useCheckinDemo } from '../../hooks/useCheckinDemo';
import { useReorderDemo } from '../../hooks/useReorderDemo';
import { useReplay } from '../../hooks/useReplay';
import { useRollingDemo } from '../../hooks/useRollingDemo';
import { useTilt } from '../../hooks/useTilt';
import { DemoCard } from '../demo-card/demo-card.component';
import { effectDescriptionStyles } from '../effects-demo/effects-demo.styles';
import {
	animationsGridStyles,
	avatarStyles,
	checkButtonStyles,
	checkResultStyles,
	checkinActionsStyles,
	checkinCardStyles,
	fadeLineStyles,
	fadeLinesStyles,
	radarStyles,
	reorderListStyles,
	reorderRowStyles,
	reorderTimeStyles,
	rollingActionsStyles,
	rollingValueStyles,
	stageStyles,
	tiltCardStyles,
	tiltLabelStyles,
	tiltNameStyles,
} from './animations-demo.styles';
import { FADE_LINES, SHAKE } from './animations-demo.utils';

const RESULT = {
	ok: { icon: Check, text: 'Entrada 08:57 · a tiempo' },
	birthday: { icon: Cake, text: '¡Feliz cumpleaños, Ana!' },
	rejected: { icon: X, text: 'Rostro no reconocido' },
};

export function AnimationsDemo() {
	const { setAnchor, ...checkin } = useCheckinDemo();
	const rolling = useRollingDemo();
	const tilt = useTilt();
	const reorder = useReorderDemo();
	const fade = useReplay();
	const result = checkin.state === 'idle' ? null : RESULT[checkin.state];

	return (
		<div className={animationsGridStyles()}>
			<DemoCard title="Checada con festejo" className={checkinCardStyles()}>
				<div className={stageStyles()}>
					<motion.button
						ref={setAnchor}
						type="button"
						aria-label="Checar entrada"
						className={checkButtonStyles()}
						onClick={() => checkin.check('ok')}
						animate={
							checkin.state === 'rejected'
								? { x: SHAKE }
								: {
										x: 0,
										scale:
											checkin.state === 'idle' ? 1 : [1, 1.12, 1],
									}
						}
						transition={{ duration: 0.5 }}
						key={checkin.attempt}
						whileTap={{ scale: 0.92 }}
					>
						<span className={radarStyles()} />
						<span className={radarStyles({ delay: 'second' })} />
						<Fingerprint />
					</motion.button>
					<AnimatePresence mode="wait">
						{result && checkin.state !== 'idle' && (
							<motion.div
								key={`${checkin.state}-${checkin.attempt}`}
								className={checkResultStyles({ state: checkin.state })}
								initial={{ opacity: 0, y: 12, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 6 }}
								transition={INDICATOR_SPRING}
							>
								<result.icon />
								{result.text}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<div className={checkinActionsStyles()}>
					<Button size="sm" onClick={() => checkin.check('ok')}>
						A tiempo
					</Button>
					<Button
						size="sm"
						variant="secondary"
						onClick={() => checkin.check('birthday')}
					>
						Cumpleaños
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => checkin.check('rejected')}
					>
						Rechazo
					</Button>
				</div>
				<p className={effectDescriptionStyles()}>
					Radar mientras espera, rebote al checar, confeti de cumpleaños con los
					colores del tema y sacudida si no reconoce el rostro.
				</p>
			</DemoCard>
			<DemoCard title="Número que rueda">
				<RollingNumber value={rolling.value} className={rollingValueStyles()} />
				<div className={rollingActionsStyles()}>
					<Button size="sm" variant="secondary" onClick={rolling.charge}>
						<Plus />
						Cobrar
					</Button>
					<Button size="sm" variant="ghost" onClick={rolling.refund}>
						<Minus />
						Reembolsar
					</Button>
				</div>
				<p className={effectDescriptionStyles()}>
					Cada dígito es una columna que se desliza; el lector de pantalla oye
					el monto completo.
				</p>
			</DemoCard>
			<DemoCard title="Gafete con inclinación">
				<div
					className={stageStyles()}
					onPointerMove={tilt.onPointerMove}
					onPointerLeave={tilt.onPointerLeave}
				>
					<motion.div
						className={tiltCardStyles()}
						style={{
							rotateX: tilt.rotateX,
							rotateY: tilt.rotateY,
							transformPerspective: 700,
						}}
					>
						<span className={tiltLabelStyles()}>Empleado #0142</span>
						<span className={tiltNameStyles()}>Ana Pech · Contabilidad</span>
					</motion.div>
				</div>
			</DemoCard>
			<DemoCard
				title="Reordenar con movimiento"
				aside={
					<Segmented
						aria-label="Ordenar por"
						value={reorder.sortBy}
						onValueChange={reorder.setSortBy}
						options={[
							{ value: 'time', label: 'Hora' },
							{ value: 'name', label: 'Nombre' },
						]}
					/>
				}
			>
				<ul className={reorderListStyles()}>
					{reorder.employees.map((employee) => (
						<motion.li
							key={employee.name}
							layout
							transition={INDICATOR_SPRING}
							className={reorderRowStyles()}
						>
							<span className={avatarStyles()}>
								{initials(employee.name)}
							</span>
							{employee.name}
							<span className={reorderTimeStyles()}>{employee.time}</span>
						</motion.li>
					))}
				</ul>
			</DemoCard>
			<DemoCard
				title="Aparecer con desenfoque"
				aside={
					<Button size="sm" variant="ghost" onClick={fade.replay}>
						<RotateCcw />
						Repetir
					</Button>
				}
			>
				<div key={fade.round} className={fadeLinesStyles()}>
					{FADE_LINES.map((line, index) => (
						<motion.p
							key={line}
							className={fadeLineStyles()}
							initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
							animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 0.5, delay: index * 0.12 }}
						>
							{line}
						</motion.p>
					))}
				</div>
				<p className={effectDescriptionStyles()}>
					Para resúmenes que llegan del servidor o respuestas de la IA.
				</p>
			</DemoCard>
		</div>
	);
}
