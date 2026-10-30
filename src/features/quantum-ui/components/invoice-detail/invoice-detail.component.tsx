import { Badge } from '@/components/ui/badge/badge.component';
import { Timeline } from '@/components/ui/timeline/timeline.component';
import {
	detailBadgesStyles,
	detailListStyles,
	detailSectionLabelStyles,
	detailTermStyles,
	detailValueStyles,
	totalsGrandStyles,
	totalsStyles,
} from './invoice-detail.styles';

const PAYMENTS = [
	{
		title: 'Parcialidad 1 · $63,200.00',
		hint: '27 oct · complemento P-0087 emitido',
		tone: 'done' as const,
	},
	{
		title: 'Parcialidad 2 · $63,200.00',
		hint: 'Vence el 26 nov',
		tone: 'next' as const,
	},
	{ title: 'Liquidada', hint: 'Pendiente', tone: 'pending' as const },
];

export function InvoiceDetail() {
	return (
		<>
			<div className={detailBadgesStyles()}>
				<Badge tone="warning" dot>
					Por cobrar
				</Badge>
				<Badge tone="info">PPD</Badge>
				<Badge>CFDI 4.0</Badge>
			</div>
			<dl className={detailListStyles()}>
				<dt className={detailTermStyles()}>Receptor</dt>
				<dd className={detailValueStyles({ mono: true })}>HCA150902K28</dd>
				<dt className={detailTermStyles()}>Uso de CFDI</dt>
				<dd className={detailValueStyles()}>G03 · Gastos en general</dd>
				<dt className={detailTermStyles()}>Emitida</dt>
				<dd className={detailValueStyles()}>27 oct 2026, 10:42</dd>
				<dt className={detailTermStyles()}>UUID</dt>
				<dd className={detailValueStyles({ mono: true })}>9F3C2B7A-…-A21E</dd>
			</dl>
			<div>
				<p className={detailSectionLabelStyles()}>Pagos</p>
				<Timeline items={PAYMENTS} />
			</div>
			<dl className={totalsStyles()}>
				<dt>Subtotal</dt>
				<dd>$108,965.52</dd>
				<dt>IVA 16%</dt>
				<dd>$17,434.48</dd>
				<div className={totalsGrandStyles()}>
					<dt>Total</dt>
					<dd>$126,400.00</dd>
				</div>
			</dl>
		</>
	);
}
