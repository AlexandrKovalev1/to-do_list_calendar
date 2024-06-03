const initialState = {
	selectedDay: new Date(),
	taskDisplayMode: 'today'
} as const;

export const appReducer = (
	state: InitStateType = initialState,
	action: ActionAppTypes
) => {
	switch (action.type) {
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

export const toggleDisplayTaskMode = (mode: 'today' | 'week') => {
	return {
		type: 'TOGGLE-DISPLAY-TASK-MODE',
		mode
	} as const;
};

//types
type ActionAppTypes = SetSelectedDayType | ToggleDisplayTaskModeType;
type InitStateType = {
	selectedDay: Date;
	taskDisplayMode: 'today' | 'week';
};
type SetSelectedDayType = ReturnType<typeof setSelectedDay>;
type ToggleDisplayTaskModeType = ReturnType<typeof toggleDisplayTaskMode>;
