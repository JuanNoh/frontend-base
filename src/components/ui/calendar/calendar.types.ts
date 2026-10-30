export interface DateRange {
	from?: Date;
	to?: Date;
}

export interface CalendarProps {
	selected?: Date;
	range?: DateRange;
	onSelect: (date: Date) => void;
	onDayHover?: (date?: Date) => void;
	className?: string;
}
