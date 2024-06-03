import { createDate } from './createDate';

export const getDaysOfWeek = (
	setSelectedDay: Date,
	locale: string = 'default',
	firstWeekDay: number = 2
) => {
	const weekDaysNames: {
		day: ReturnType<typeof createDate>['day'];
		dayNumber: ReturnType<typeof createDate>['dayNumber'];
		dayNumberInWeek: ReturnType<typeof createDate>['dayNumberInWeek'];
		dayId: ReturnType<typeof createDate>['time'];
	}[] = Array.from({ length: 7 });

	const date = setSelectedDay;

	weekDaysNames.forEach((_, i) => {
		const { day, dayNumberInWeek, dayNumber, time } = createDate({
			locale,
			date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
		});

		weekDaysNames[dayNumberInWeek - 1] = {
			dayNumber,
			day,
			dayNumberInWeek,
			dayId: time
		};
	});

	return [
		...weekDaysNames.slice(firstWeekDay - 1),
		...weekDaysNames.slice(0, firstWeekDay - 1)
	];
};
