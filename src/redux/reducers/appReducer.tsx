

const initialState = {
	selectedDay: new Date()
};



export const appReducer = (state: InitStateType = initialState, action: ActionAppTypes) => {
	switch (action.type) {
		case 'SET-SELECTED-DAY':{
			return {...state,selectedDay:action.day}
		}
		default : {
			return state;
		}
	}
};

export const setSelectedDay = (day: Date) => {
	return {
		type:'SET-SELECTED-DAY',
		day
	} as const;
};

//types
type ActionAppTypes = SetSelectedDayType
type InitStateType = typeof initialState;
type SetSelectedDayType = ReturnType<typeof setSelectedDay>