export const getWeekNumber = (date: Date) => {
	const getFirstDayOfYear = new Date(date.getFullYear(), 0, 1);
	const pastDaysYear =
		(date.getTime() - getFirstDayOfYear.getTime()) / 86400000;

	return Math.ceil((pastDaysYear - getFirstDayOfYear.getDay() + 1) / 7);
};
