import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { cn } from '@/lib/utils/cn';
import { useWeekAgenda } from './useWeekAgenda';
import {
	weekAgendaColumnStyles,
	weekAgendaDayStyles,
	weekAgendaDaysStyles,
	weekAgendaEventStyles,
	weekAgendaGridStyles,
	weekAgendaHourStyles,
	weekAgendaNowStyles,
	weekAgendaSlotStyles,
	weekAgendaStyles,
	weekAgendaTitleStyles,
	weekAgendaToolbarStyles,
} from './week-agenda.styles';
import type { WeekAgendaProps } from './week-agenda.types';
import { hourLabel, slotStart } from './week-agenda.utils';

export function WeekAgenda({
	events,
	date,
	onDateChange,
	onEventClick,
	onSlotClick,
	startHour = 8,
	endHour = 20,
	className,
}: WeekAgendaProps) {
	const agenda = useWeekAgenda({ events, date, onDateChange, startHour, endHour });

	return (
		<div className={cn(weekAgendaStyles(), className)}>
			<div className={weekAgendaToolbarStyles()}>
				<Button variant="secondary" size="sm" onClick={agenda.goToday}>
					Hoy
				</Button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Semana anterior"
					onClick={agenda.previousWeek}
				>
					<ChevronLeft />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Semana siguiente"
					onClick={agenda.nextWeek}
				>
					<ChevronRight />
				</Button>
				<h2 className={weekAgendaTitleStyles()}>{agenda.title}</h2>
			</div>
			<div className={weekAgendaDaysStyles()}>
				{agenda.days.map((day) => (
					<button
						key={day.key}
						type="button"
						aria-label={day.fullLabel}
						aria-pressed={day.isSelected}
						data-today={day.isToday || undefined}
						onClick={() => onDateChange(day.date)}
						className={weekAgendaDayStyles()}
					>
						<span>{day.weekday}</span>
						<b>{day.number}</b>
					</button>
				))}
			</div>
			<div className={weekAgendaGridStyles()}>
				<div aria-hidden="true">
					{agenda.hours.map((hour) => (
						<span key={hour} className={weekAgendaHourStyles()}>
							{hourLabel(hour)}
						</span>
					))}
				</div>
				{agenda.days.map((day) => (
					<div
						key={day.key}
						role="group"
						aria-label={day.fullLabel}
						data-selected={day.isSelected || undefined}
						className={weekAgendaColumnStyles()}
					>
						{agenda.hours.map((hour) => (
							<button
								key={hour}
								type="button"
								aria-label={`Agendar el ${day.fullLabel} a las ${hourLabel(hour)}`}
								onClick={() => onSlotClick?.(slotStart(day.date, hour))}
								className={weekAgendaSlotStyles()}
							/>
						))}
						{day.events.map(
							({ event, top, height, left, width, isShort }) => (
								<button
									key={event.id}
									type="button"
									data-short={isShort || undefined}
									onClick={() => onEventClick?.(event)}
									className={weekAgendaEventStyles({ hue: event.hue })}
									style={{
										top: `${top}%`,
										height: `${height}%`,
										left: `${left}%`,
										width: `${width}%`,
									}}
								>
									<b>{event.title}</b>
									<small>{event.subtitle}</small>
								</button>
							)
						)}
						{day.isToday && agenda.nowTop !== null && (
							<span
								className={weekAgendaNowStyles()}
								style={{ top: `${agenda.nowTop}%` }}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
