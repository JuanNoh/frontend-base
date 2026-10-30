import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar/calendar.component';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { DemoCard } from '@/features/quantum-ui/components/demo-card/demo-card.component';
import {
	agendaDayEmptyStyles,
	agendaDayItemStyles,
	agendaDayListStyles,
	agendaPeopleStyles,
	agendaPersonDotStyles,
	agendaPersonStyles,
	agendaSidebarStyles,
} from './agenda-sidebar.styles';
import type { AgendaSidebarProps } from './agenda-sidebar.types';

export function AgendaSidebar({
	date,
	onDateChange,
	people,
	hiddenPeople,
	onTogglePerson,
	dayAppointments,
	onOpenAppointment,
}: AgendaSidebarProps) {
	return (
		<aside className={agendaSidebarStyles()}>
			<DemoCard title="Calendario">
				<Calendar selected={date} onSelect={onDateChange} />
			</DemoCard>
			<DemoCard title="Quién atiende">
				<div className={agendaPeopleStyles()}>
					{people.map((person) => (
						<label key={person.id} className={agendaPersonStyles()}>
							<Checkbox
								checked={!hiddenPeople.has(person.id)}
								onCheckedChange={() => onTogglePerson(person.id)}
							/>
							{person.name}
							<span
								className={agendaPersonDotStyles({ hue: person.hue })}
							/>
						</label>
					))}
				</div>
			</DemoCard>
			<DemoCard title="Citas del día">
				{dayAppointments.length === 0 ? (
					<p className={agendaDayEmptyStyles()}>Sin citas este día.</p>
				) : (
					<ul className={agendaDayListStyles()}>
						{dayAppointments.map((appointment) => (
							<li key={appointment.id}>
								<button
									type="button"
									onClick={() => onOpenAppointment(appointment)}
									className={agendaDayItemStyles()}
								>
									<time>{format(appointment.start, 'HH:mm')}</time>
									<b>{appointment.title}</b>
								</button>
							</li>
						))}
					</ul>
				)}
			</DemoCard>
		</aside>
	);
}
