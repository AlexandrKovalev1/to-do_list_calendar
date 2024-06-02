import { useAppSelector } from '../../redux/store/store';
import { changeStatusTask, createTodoList, TodolistType } from '../../redux/reducers/todolistReducer';
import { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';

type Props = {};
export const TasksFromDay = memo(
	(props: Props) => {
		const selectedDayId = useAppSelector<string>(state => state.app.selectedDay.getTime().toString());
		const todoList = useAppSelector<TodolistType | undefined>(state => state.todolists.find(todos => todos.id === selectedDayId));

		const dispatch = useDispatch();

		return (
			<div>
				<div>
					<input type="text" />
					<button>+</button>
				</div>
				{todoList ? todoList.tasks.map(task => (
						<Task title={task.title} isDone={task.isDone} id={task.id} key={task.id} todolistId={selectedDayId} />
					))
					: <div>
						<button onClick={() => dispatch(createTodoList(selectedDayId))}>создать задачи</button>
					</div>
				}

			</div>
		);
	}
);

type TaskPropsType = {
	title: string,
	isDone: boolean,
	id: string
	todolistId: string
}

const Task: FC<TaskPropsType> = ({ title, isDone, id, todolistId }) => {

	const dispatch = useDispatch();
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {


		dispatch(changeStatusTask(todolistId, id, e.currentTarget.checked));
	};
	return (
		<div>
			<input type="checkbox" checked={isDone} onChange={onChangeHandler} />
			<span>{title}</span>
			<button>delete</button>
		</div>
	);
};