import { combineReducers, legacy_createStore } from 'redux';
import { todolistReducer } from '../reducers/todolistReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { appReducer } from '../reducers/appReducer';

const rootReducer = combineReducers({
	todolists: todolistReducer,
	app:appReducer
});

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;