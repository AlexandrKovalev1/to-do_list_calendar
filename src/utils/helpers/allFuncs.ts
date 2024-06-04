export const createTitleOfTaskBlock = (selectedDay: Date) => {
	const currentDay = selectedDay.toLocaleDateString('en-Us', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
	const today = new Date().toLocaleDateString('en-Us', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
	const anotherDay = selectedDay
		.toLocaleDateString('en-Us', {
			day: 'numeric',
			month: 'long',
			weekday: 'long'
		})
		.split(' ')
		.reverse()
		.join(' ')
		.slice(0, -1);
	const title = currentDay === today ? 'Today' : anotherDay;

	return title;
};
