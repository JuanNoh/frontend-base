import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Drawer } from '@/components/ui/drawer/drawer.component';
import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { WeekAgenda } from '@/components/ui/week-agenda/week-agenda.component';
import { AgendaSidebar } from './components/agenda-sidebar/agenda-sidebar.component';
import { AppointmentDetail } from './components/appointment-detail/appointment-detail.component';
import { AppointmentForm } from './components/appointment-form/appointment-form.component';
import { useAgenda } from './hooks/useAgenda';
import { agendaLayoutStyles, screenStyles } from './screens.styles';

export function AgendaPage() {
	const agenda = useAgenda();

	return (
		<div className={screenStyles()}>
			<PageHeader
				title="Agenda"
				description="Toca un horario libre para agendar o una cita para ver su detalle."
				actions={
					<Button onClick={agenda.openNewNow}>
						<Plus />
						Nueva cita
					</Button>
				}
			/>
			<div className={agendaLayoutStyles()}>
				<WeekAgenda
					events={agenda.events}
					date={agenda.date}
					onDateChange={agenda.setDate}
					onEventClick={agenda.openAppointment}
					onSlotClick={agenda.openNew}
				/>
				<AgendaSidebar
					date={agenda.date}
					onDateChange={agenda.setDate}
					people={agenda.people}
					hiddenPeople={agenda.hiddenPeople}
					onTogglePerson={agenda.togglePerson}
					dayAppointments={agenda.dayAppointments}
					onOpenAppointment={agenda.openAppointment}
				/>
			</div>
			<AppointmentDetail
				appointment={agenda.selected}
				open={agenda.isDetailOpen}
				onClose={agenda.closePanel}
				onCancel={agenda.cancelSelected}
			/>
			<Drawer
				open={agenda.isNewOpen}
				onClose={agenda.closePanel}
				eyebrow="Agenda"
				title="Nueva cita"
			>
				<AppointmentForm
					key={agenda.draftStart.getTime()}
					start={agenda.draftStart}
					onCreate={agenda.create}
					onCancel={agenda.closePanel}
				/>
			</Drawer>
		</div>
	);
}
