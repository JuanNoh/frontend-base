import type { Appointment } from '../../types/agenda.types';

export interface AppointmentDetailProps {
	appointment: Appointment;
	open: boolean;
	onClose: () => void;
	onCancel: () => void;
}
