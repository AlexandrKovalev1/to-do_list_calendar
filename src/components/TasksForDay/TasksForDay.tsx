import { Todolist } from '../TodoList/Todolist';
import { useAppSelector } from '../../redux/store/store';

export const TasksForDay = () => {
	const selectedDay = useAppSelector(state => state.app.selectedDay);

	return (
		<div>
			<Todolist day={selectedDay} />
		</div>
	);
};
