import classes from './Task.module.css';
import { useDispatch } from 'react-redux';
import { ChangeEvent, FC, memo } from 'react';
import {
	changeStatusTask,
	deleteTask
} from '../../../redux/reducers/todolistReducer';

type TaskPropsType = {
	title: string;
	isDone: boolean;
	id: string;
	todolistId: string;
};

export const Task: FC<TaskPropsType> = memo(
	({ title, isDone, id, todolistId }) => {
		const dispatch = useDispatch();

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			dispatch(changeStatusTask(todolistId, id, e.currentTarget.checked));
		};

		const deleteTaskHandler = () => {
			dispatch(deleteTask(todolistId, id));
		};

		const className = isDone
			? `${classes.task_wrapper} ${classes.isDone}`
			: classes.task_wrapper;

		return (
			<div className={className}>
				<input
					type='checkbox'
					checked={isDone}
					onChange={onChangeHandler}
					className={classes.task_checkbox__checkbox}
					id={id}
				/>
				<label
					className={classes.task_custom_checkbox__label}
					htmlFor={`${id}`}
				></label>
				<span>{title}</span>
				<button
					className={classes.task_button_delete}
					onClick={deleteTaskHandler}
				></button>
			</div>
		);
	}
);
