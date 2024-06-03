import classes from './TodolistsBlock.module.css';
import { TodoListsBlockHeader } from '../TodoListsBlockHeader/TodoListsBlockHeader';
import { TasksForDay } from '../TasksForDay/TasksForDay';
import { TasksForWeek } from '../TasksForWeek/TasksForWeek';

type Props = {};
export const TodolistsBlock = (props: Props) => {
	return (
		<div className={classes.wrapper}>
			<TodoListsBlockHeader />
			{/*<TasksForDay />*/}
			<TasksForWeek />
		</div>
	);
};
