import { createDate } from './createDate';

export const getDaysOfWeek = (
	setSelectedDay: Date,
	locale: string = 'default',
	firstWeekDay: number = 1
) => {
	const weekDaysNames: {
		date: Date;
	}[] = [];

	let dayInWeekNumber = setSelectedDay.getDay();
	if (dayInWeekNumber === 0) dayInWeekNumber = 7;

	for (let i = 1 - dayInWeekNumber; i <= 7 - dayInWeekNumber; i++) {
		const { date } = createDate({
			locale,
			date: new Date(
				setSelectedDay.getFullYear(),
				setSelectedDay.getMonth(),
				setSelectedDay.getDate() + i
			)
		});

		weekDaysNames.push({
			date
		});
	}

	return [
		...weekDaysNames.slice(firstWeekDay - 1),
		...weekDaysNames.slice(0, firstWeekDay - 1)
	];
};
