type DayType = {
	date: Date;
	dayNumber: number;
	day: string;
	dayShort: string;
	dayNumberInWeek: number;
	year: number;
	yearShort: string;
	month: string;
	monthShort: string;
	monthNumber: number;
	monthIndex: number;
	time: number;
	weekNumber: number;
	week: number;
};

export type CalendarStateType = {
	selectedDay: Date;
	selectedMonthIndex: number;
	selectedYear: number;
	calendarDays: DayType[];
	mode: 'days' | 'months' | 'years';
	// countDaysOfMonth:number,
};

export const calendarReducer = () => {};
