import classes from './TasksForWeek.module.css';
import { Todolist } from '../TodoList/Todolist';
import { useAppSelector } from '../../redux/store/store';

export const TasksForWeek = () => {
	const selectedWeek = useAppSelector(state => state.app.selectedWeek);

	const TasksForWeekWeek = selectedWeek
		? selectedWeek.map(day => (
				<Todolist day={day.date} key={day.date.getTime()} />
			))
		: [];

	return <div className={classes.wrapper}>{TasksForWeekWeek}</div>;
};
