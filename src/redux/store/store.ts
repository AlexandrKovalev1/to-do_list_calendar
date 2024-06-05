import { combineReducers, legacy_createStore } from 'redux';
import { todolistReducer } from '../reducers/todolistReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { appReducer } from '../reducers/appReducer';
import { loadState, saveState } from '../../lockaStorage/lockaStorage';

const rootReducer = combineReducers({
	todolists: todolistReducer,
	app: appReducer
});

const persistedState = loadState();
export const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(() => {
	saveState({
		todolists: store.getState().todolists,
		app: store.getState().app
	});
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
	useSelector;
