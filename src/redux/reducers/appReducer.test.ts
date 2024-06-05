import {
	appReducer,
	setSelectedDay,
	toggleDisplayTaskMode,
	setWeekDays
} from './appReducer';

describe('appReducer', () => {
	const initialState = {
		selectedDay: new Date(),
		taskDisplayMode: 'day' as const,
		selectedWeek: [],
		currentDate: new Date()
	};

	it('should handle SET-SELECTED-DAY action', () => {
		const newSelectedDay = new Date('2022-01-01');
		const action = setSelectedDay(newSelectedDay);

		const newState = appReducer(initialState, action);

		expect(newState.selectedDay).toEqual(newSelectedDay);
	});

	it('should handle TOGGLE-DISPLAY-TASK-MODE action', () => {
		const newDisplayMode = 'week';
		const action = toggleDisplayTaskMode(newDisplayMode);

		const newState = appReducer(initialState, action);

		expect(newState.taskDisplayMode).toEqual(newDisplayMode);
	});

	it('should handle SET-WEEK-DAYS action', () => {
		const newWeekDays = [
			{ date: new Date('2022-01-01') },
			{ date: new Date('2022-01-02') }
		];
		const action = setWeekDays(newWeekDays);

		const newState = appReducer(initialState, action);

		expect(newState.selectedWeek).toEqual(newWeekDays);
	});
});
