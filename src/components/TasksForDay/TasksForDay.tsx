import { Todolist } from '../TodoList/Todolist';
import { useAppSelector } from '../../redux/store/store';
import { useMemo } from 'react';

export const TasksForDay = () => {
	const selectedDayFromState = useAppSelector(state => state.app.selectedDay);
	const selectedDay = useMemo(
		() => new Date(selectedDayFromState),
		[selectedDayFromState]
	);
	return (
		<div>
			<Todolist day={selectedDay} />
		</div>
	);
};
