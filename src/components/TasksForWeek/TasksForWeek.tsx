import classes from './TasksForWeek.module.css';

import { useAppSelector } from '../../redux/store/store';
import { Todolist } from '../TodoList/Todolist';

type Props = {};
export const TasksForWeek = (props: Props) => {
	const selectedWeek = useAppSelector(state => state.app.selectedWeek);

	const TasksForWeekWeek = selectedWeek
		? selectedWeek.map(day => (
				<Todolist day={day.date} key={day.date.getTime()} />
			))
		: [];

	return <div className={classes.wrapper}>{TasksForWeekWeek}</div>;
};
