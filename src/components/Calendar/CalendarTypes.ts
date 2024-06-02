export type ModeType = 'days' | 'months' | 'years';
export type MonthsNameType = {
	month: string;
	monthShort: string;
	monthIndex: number;
	date: Date;
};
export type DayType = {
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
