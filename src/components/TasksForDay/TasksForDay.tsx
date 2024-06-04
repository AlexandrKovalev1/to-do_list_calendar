import classes from './TasksFoDay.module.css';
import { Todolist } from '../TodoList/Todolist';
import { useAppSelector } from '../../redux/store/store';

type Props = {};
export const TasksForDay = (props: Props) => {
	const selectedDay = useAppSelector(state => state.app.selectedDay);

	return (
		<div className={classes.wrapper}>
			<Todolist day={selectedDay} />
		</div>
	);
};
