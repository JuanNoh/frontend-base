import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { Drawer } from '@/components/ui/drawer/drawer.component';
import { Timeline } from '@/components/ui/timeline/timeline.component';
import {
	detailBadgesStyles,
	detailListStyles,
	detailSectionLabelStyles,
	detailTermStyles,
	detailValueStyles,
	totalsGrandStyles,
	totalsStyles,
} from '@/features/quantum-ui/components/invoice-detail/invoice-detail.styles';
import { STATUS_TONE } from '@/features/quantum-ui/components/invoices-demo/invoices-demo.columns';
import { formatMoney } from '@/lib/format';
import type { SaleDetailProps } from './sale-detail.types';
import { saleSteps, saleTotals } from './sale-detail.utils';

export function SaleDetail({ invoice, open, onClose, onDownload }: SaleDetailProps) {
	const { subtotal, tax } = saleTotals(invoice.total);

	return (
		<Drawer
			open={open}
			onClose={onClose}
			eyebrow="Venta"
			title={invoice.folio}
			description={invoice.client}
			footer={
				<Button variant="secondary" onClick={onDownload}>
					<Download />
					Descargar PDF
				</Button>
			}
		>
			<div className={detailBadgesStyles()}>
				<Badge tone={STATUS_TONE[invoice.status]} dot>
					{invoice.status}
				</Badge>
				<Badge tone="info">{invoice.method}</Badge>
			</div>
			<dl className={detailListStyles()}>
				<dt className={detailTermStyles()}>RFC</dt>
				<dd className={detailValueStyles({ mono: true })}>{invoice.rfc}</dd>
				<dt className={detailTermStyles()}>Emitida</dt>
				<dd className={detailValueStyles()}>
					{format(parseISO(invoice.issuedAt), "d 'de' MMMM yyyy", {
						locale: es,
					})}
				</dd>
			</dl>
			<div>
				<p className={detailSectionLabelStyles()}>Seguimiento</p>
				<Timeline items={saleSteps(invoice)} />
			</div>
			<dl className={totalsStyles()}>
				<dt>Subtotal</dt>
				<dd>{formatMoney(subtotal)}</dd>
				<dt>IVA 16%</dt>
				<dd>{formatMoney(tax)}</dd>
				<div className={totalsGrandStyles()}>
					<dt>Total</dt>
					<dd>{formatMoney(invoice.total)}</dd>
				</div>
			</dl>
		</Drawer>
	);
}
