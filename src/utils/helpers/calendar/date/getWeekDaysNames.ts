import { createDate } from '../../createDate';

export const getWeekDaysNames = (
	locale: string = 'default',
	firstWeekDay: number = 1
) => {
	const weekDaysNames: {
		day: ReturnType<typeof createDate>['day'];
		dayShort: ReturnType<typeof createDate>['dayShort'];
		dayNumberInWeek: ReturnType<typeof createDate>['dayNumberInWeek'];
	}[] = Array.from({ length: 7 });

	const date = new Date();

	weekDaysNames.forEach((_, i) => {
		const { day, dayNumberInWeek, dayShort } = createDate({
			locale,
			date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
		});

		weekDaysNames[dayNumberInWeek - 1] = { dayShort, day, dayNumberInWeek };
	});

	return [
		...weekDaysNames.slice(firstWeekDay - 1),
		...weekDaysNames.slice(0, firstWeekDay - 1)
	];
};
