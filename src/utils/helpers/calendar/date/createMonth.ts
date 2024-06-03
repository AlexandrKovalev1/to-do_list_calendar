import { createDate } from '../../createDate';
import { getMonthNumberOfDays } from './getMonthNumberOfDays';

type CreateMonthParams = {
	date?: Date;
	locale?: string;
};

export const createMonth = (params?: CreateMonthParams) => {
	const locale = params?.locale ?? 'default';
	const date = params?.date ?? new Date();

	const currentDate = createDate({ date, locale });

	const { month: monthName, year, monthIndex, monthNumber } = currentDate;

	const getDay = (dayNumber: number) =>
		createDate({ date: new Date(year, monthIndex, dayNumber), locale });

	const createMonthDays = () => {
		const days = [];

		for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i++) {
			days[i] = getDay(i + 1);
		}

		return days;
	};

	return {
		getDay,
		monthName,
		monthIndex,
		monthNumber,
		year,
		createMonthDays
	};
};
