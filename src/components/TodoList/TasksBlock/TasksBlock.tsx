import { FC } from 'react';
import { Task } from '../Task/Task';
import classes from '../Todolist.module.css';
import { AddTask } from '../AddTask/AddTask';
import { useAppSelector } from '../../../redux/store/store';
import { TodolistType } from '../../../redux/reducers/todolistReducer';

type TasksBlockProps = {
	todoId: string;
	todoList: TodolistType;
};
export const TasksBlock: FC<TasksBlockProps> = ({ todoId, todoList }) => {
	const mode = useAppSelector(state => state.app.taskDisplayMode);

	const className =
		mode === 'day'
			? classes.tasks_block_wrapper
			: [classes.tasks_block_wrapper, classes.week_mode].join(' ');

	return (
		<div className={className}>
			<AddTask todoId={todoId} />
			{todoList.tasks.map(task => (
				<Task
					title={task.title}
					isDone={task.isDone}
					id={task.id}
					key={task.id}
					todolistId={todoId}
				/>
			))}
		</div>
	);
};
