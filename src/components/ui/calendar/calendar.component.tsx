import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/button/button.component';
import {
	calendarDayStyles,
	calendarFooterStyles,
	calendarGridStyles,
	calendarHeaderStyles,
	calendarStyles,
	calendarTitleStyles,
	calendarWeekdayStyles,
} from './calendar.styles';
import type { CalendarProps } from './calendar.types';
import { dayLabel, dayState, WEEKDAYS } from './calendar.utils';
import { useCalendar } from './useCalendar';

export function Calendar({
	selected,
	range,
	onSelect,
	onDayHover,
	className,
}: CalendarProps) {
	const calendar = useCalendar(selected ?? range?.from);

	return (
		<div className={cn(calendarStyles(), className)}>
			<div className={calendarHeaderStyles()}>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Mes anterior"
					onClick={calendar.previous}
				>
					<ChevronLeft />
				</Button>
				<span className={calendarTitleStyles()}>{calendar.title}</span>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Mes siguiente"
					onClick={calendar.next}
				>
					<ChevronRight />
				</Button>
			</div>
			<div
				className={calendarGridStyles()}
				onPointerLeave={() => onDayHover?.(undefined)}
			>
				{WEEKDAYS.map((weekday) => (
					<span key={weekday} className={calendarWeekdayStyles()}>
						{weekday}
					</span>
				))}
				{calendar.days.map((day) => {
					const state = dayState(day, calendar.month, selected, range);

					return (
						<button
							key={day.toISOString()}
							type="button"
							aria-label={dayLabel(day)}
							aria-pressed={state.selected}
							onClick={() => onSelect(day)}
							onPointerEnter={() => onDayHover?.(day)}
							className={calendarDayStyles(state)}
						>
							{day.getDate()}
						</button>
					);
				})}
			</div>
			<div className={calendarFooterStyles()}>
				<Button variant="ghost" size="sm" onClick={calendar.goToToday}>
					Hoy
				</Button>
			</div>
		</div>
	);
}
