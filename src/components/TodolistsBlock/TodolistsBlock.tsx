import classes from './TodolistsBlock.module.css';
import { TodoListsBlockHeader } from './TodoListsBlockHeader/TodoListsBlockHeader';
import { TasksForDay } from '../TasksForDay/TasksForDay';
import { TasksForWeek } from '../TasksForWeek/TasksForWeek';
import { useAppSelector } from '../../redux/store/store';

type Props = {};
export const TodolistsBlock = (props: Props) => {
	const mode = useAppSelector(state => state.app.taskDisplayMode);

	return (
		<div className={classes.wrapper}>
			<TodoListsBlockHeader />
			{mode === 'day' && <TasksForDay />}
			{mode === 'week' && <TasksForWeek />}
		</div>
	);
};
