import { useAppSelector } from '../../redux/store/store';
import {
	createTodoList,
	TodolistType
} from '../../redux/reducers/todolistReducer';
import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Todolist.module.css';
import { TasksBlock } from './TasksBlock/TasksBlock';
import { createTitleOfTaskBlock } from '../../utils/helpers/allFuncs';

type Props = {
	day: Date;
};

export const Todolist: FC<Props> = memo(({ day }) => {
	const dayId = day.getTime().toString();
	const title = createTitleOfTaskBlock(day);

	const todoList = useAppSelector<TodolistType | undefined>(state =>
		state.todolists.find(todos => todos.id === dayId)
	);

	return (
		<div className={classes.wrapper}>
			<TodolistBlockTitle title={title} />
			{todoList ? (
				<TasksBlock todoId={dayId} todoList={todoList} />
			) : (
				<CreateTodolistBlock todoId={dayId} />
			)}
		</div>
	);
});

type TodolistBlockTitlePropsType = {
	title: string;
};

export const TodolistBlockTitle: FC<TodolistBlockTitlePropsType> = ({
	title
}) => {
	return (
		<div>
			<h3 className={classes.todoList_title}>{title}</h3>
		</div>
	);
};

export const CreateTodolistBlock = ({ todoId }: { todoId: string }) => {
	const dispatch = useDispatch();
	return (
		<div className={classes.createTodolist_wrapper}>
			<button onClick={() => dispatch(createTodoList(todoId))}>
				Create todolist
			</button>
		</div>
	);
};
