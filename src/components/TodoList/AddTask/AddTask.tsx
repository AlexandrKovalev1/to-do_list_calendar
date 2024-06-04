import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/reducers/todolistReducer';
import classes from './AddTask.module.css';
import { Button } from '../../Button/Button';

type AddTaskProps = {
	todoId: string;
};
export const AddTask: FC<AddTaskProps> = ({ todoId }) => {
	const [text, setText] = useState('');
	const [error, setError] = useState<string>('');

	const dispatch = useDispatch();

	const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		const textValue = e.currentTarget.value;
		if (textValue.length > 19) return setError('max length 20 symbols');
		if (error) setError('');
		setText(textValue.trim());
	};

	const onClickHandler = () => {
		if (!text) return setError('requaired');
		dispatch(addTask(todoId, text));
		setText('');
	};

	const onFocusHandler = () => {
		if (error) return setError('');
	};

	const inputClass = error
		? `${classes.addTask_input} ${classes.error}`
		: classes.addTask_input;
	return (
		<div className={classes.addTask}>
			<input
				type='text'
				className={inputClass}
				onChange={onChangeText}
				value={text}
				onFocus={onFocusHandler}
				placeholder={'create task'}
			/>
			{error && <small className={classes.addTask_messageError}>{error}</small>}
			<button
				className={classes.buttonAdd}
				disabled={!!error}
				onClick={onClickHandler}
			>
				add task
			</button>
		</div>
	);
};
