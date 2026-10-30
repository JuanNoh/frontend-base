import type { AppointmentValues } from '../../schemas/appointment.schema';

export interface AppointmentFormProps {
	start: Date;
	onCreate: (values: AppointmentValues) => void;
	onCancel: () => void;
}
