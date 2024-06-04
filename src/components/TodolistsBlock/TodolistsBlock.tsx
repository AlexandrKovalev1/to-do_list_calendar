import classes from './TodolistsBlock.module.css';
import { TasksForDay } from '../TasksForDay/TasksForDay';
import { useAppSelector } from '../../redux/store/store';
import { TasksForWeek } from '../TasksForWeek/TasksForWeek';
import { TodoListsBlockHeader } from './TodoListsBlockHeader/TodoListsBlockHeader';

export const TodolistsBlock = () => {
	const mode = useAppSelector(state => state.app.taskDisplayMode);

	return (
		<div className={classes.wrapper}>
			<TodoListsBlockHeader />
			{mode === 'day' && <TasksForDay />}
			{mode === 'week' && <TasksForWeek />}
		</div>
	);
};
