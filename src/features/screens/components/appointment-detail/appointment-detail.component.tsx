import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Trash2 } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar/avatar.component';
import { Button } from '@/components/ui/button/button.component';
import { Drawer } from '@/components/ui/drawer/drawer.component';
import {
	detailListStyles,
	detailTermStyles,
	detailValueStyles,
} from '@/features/quantum-ui/components/invoice-detail/invoice-detail.styles';
import { personOf } from '../../data/agenda';
import type { AppointmentDetailProps } from './appointment-detail.types';

export function AppointmentDetail({
	appointment,
	open,
	onClose,
	onCancel,
}: AppointmentDetailProps) {
	const person = personOf(appointment.personId);

	return (
		<Drawer
			open={open}
			onClose={onClose}
			eyebrow="Cita"
			title={appointment.title}
			description={appointment.subtitle}
			footer={
				<Button variant="danger" onClick={onCancel}>
					<Trash2 />
					Cancelar cita
				</Button>
			}
		>
			<dl className={detailListStyles()}>
				<dt className={detailTermStyles()}>Día</dt>
				<dd className={detailValueStyles()}>
					{format(appointment.start, "EEEE d 'de' MMMM", { locale: es })}
				</dd>
				<dt className={detailTermStyles()}>Horario</dt>
				<dd className={detailValueStyles({ mono: true })}>
					{format(appointment.start, 'HH:mm')} a{' '}
					{format(appointment.end, 'HH:mm')}
				</dd>
				<dt className={detailTermStyles()}>Atiende</dt>
				<dd className={detailValueStyles()}>{person.name}</dd>
			</dl>
			<Avatar name={person.name} hue={person.hue} size="md" />
		</Drawer>
	);
}
