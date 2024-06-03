import { useAppSelector } from '../../redux/store/store';
import {
	createTodoList,
	TodolistType
} from '../../redux/reducers/todolistReducer';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Todolist.module.css';
import { AddTask } from './AddTask/AddTask';
import { Task } from './Task/Task';
import { getTitleOfTaskBlock } from '../../utils/helpers/allFuncs';

type Props = {};
export const Todolist = memo((props: Props) => {
	const selectedDayId = useAppSelector<string>(state =>
		state.app.selectedDay.getTime().toString()
	);
	const todoList = useAppSelector<TodolistType | undefined>(state =>
		state.todolists.find(todos => todos.id === selectedDayId)
	);

	const dispatch = useDispatch();

	return (
		<div className={classes.wrapper}>
			<TodolistBlockTitle />
			<AddTask todoId={selectedDayId} />
			{todoList ? (
				todoList.tasks.map(task => (
					<Task
						title={task.title}
						isDone={task.isDone}
						id={task.id}
						key={task.id}
						todolistId={selectedDayId}
					/>
				))
			) : (
				<div>
					<button onClick={() => dispatch(createTodoList(selectedDayId))}>
						создать задачи
					</button>
				</div>
			)}
		</div>
	);
});

export const TodolistBlockTitle = (props: {}) => {
	const selectedDay = useAppSelector(state => state.app.selectedDay);

	const title = getTitleOfTaskBlock(selectedDay);
	return (
		<div>
			<h3>{title}</h3>
		</div>
	);
};
