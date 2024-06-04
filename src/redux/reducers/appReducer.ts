const initialState = {
	selectedDay: new Date(),
	taskDisplayMode: 'day' as const,
	selectedWeek: [],
	currentDate: new Date()
};

export const appReducer = (
	state: InitStateType = initialState,
	action: ActionAppTypes
) => {
	switch (action.type) {
		case 'SET-WEEK-DAYS': {
			return {
				...state,
				selectedWeek: action.days
			};
		}
		case 'SET-SELECTED-DAY': {
			return { ...state, selectedDay: action.day };
		}
		case 'TOGGLE-DISPLAY-TASK-MODE': {
			return { ...state, taskDisplayMode: action.mode };
		}
		default: {
			return state;
		}
	}
};

export const setSelectedDay = (day: Date) => {
	return {
		type: 'SET-SELECTED-DAY',
		day
	} as const;
};

export const toggleDisplayTaskMode = (mode: TaskDisplayModeType) => {
	return {
		type: 'TOGGLE-DISPLAY-TASK-MODE',
		mode
	} as const;
};

export const setWeekDays = (days: { date: Date }[]) => {
	return {
		type: 'SET-WEEK-DAYS',
		days
	} as const;
};

//types
type ActionAppTypes =
	| SetSelectedDayType
	| ToggleDisplayTaskModeType
	| SetWeekDaysType;

type TaskDisplayModeType = 'day' | 'week';

type InitStateType = {
	selectedDay: Date;
	taskDisplayMode: TaskDisplayModeType;
	selectedWeek: { date: Date }[];
	currentDate: Date;
};
type SetSelectedDayType = ReturnType<typeof setSelectedDay>;
type ToggleDisplayTaskModeType = ReturnType<typeof toggleDisplayTaskMode>;
type SetWeekDaysType = ReturnType<typeof setWeekDays>;
