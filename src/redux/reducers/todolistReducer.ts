import { v4 as uuidv4 } from 'uuid';


const initialState: TodolistType[] = [
	{
		id: '1717275600000',
		filter: 'All',
		tasks: [
			{ title: 'first', id: uuidv4(), isDone: false },
			{ title: 'second', id: uuidv4(), isDone: false },
			{ title: 'third', id: uuidv4(), isDone: true }
		]
	},
	{
		id: '1717362000000',
		filter: 'All',
		tasks: []
	}
];

export const todolistReducer = (
	state: TodolistType[] = initialState,
	action: TodolistActionsType
) => {
	switch (action.type) {
		case 'CREATE-TODOLIST': {
			const newTodolist: TodolistType = {
				id: action.todoId,
				filter: 'All',
				tasks: []
			};

			return [...state, newTodolist];
		}
		case 'ADD-TASK': {
			const task: TaskType = {
				id: uuidv4(),
				title: action.title,
				isDone: false
			};

			return state.map(todo =>
				todo.id === action.todoId
					? { ...todo, tasks: [task, ...todo.tasks] }
					: todo
			);
		}
		case 'DELETE-TASK': {
			return state.map(todo =>
				todo.id === action.todoId
					? {
						...todo,
						tasks: todo.tasks.filter(task => task.id !== action.idTask)
					}
					: todo
			);
		}
		case 'CHANGE-STATUS': {
			return state.map(todo =>
				todo.id === action.todoId
					? {
						...todo,
						tasks: todo.tasks.map(task =>
							task.id === action.taskId
								? { ...task, isDone: action.isDone }
								: task
						)
					}
					: todo
			);
		}
		case 'EDIT-TITLE-TASK': {
			return state.map(todo =>
				todo.id === action.todoId
					? {
						...todo,
						tasks: todo.tasks.map(task =>
							task.id === action.taskId
								? { ...task, title: action.title }
								: task
						)
					}
					: todo
			);
		}
		default: {
			return state;
		}
	}
};

//actionCreators

export const createTodoList = (todoId: string) => {
	return {
		type: 'CREATE-TODOLIST',
		todoId
	} as const;
};

export const addTask = (todoId: string, title: string) => {
	return {
		type: 'ADD-TASK',
		title,
		todoId
	} as const;
};

export const deleteTask = (todoId: string, idTask: string) => {
	return {
		type: 'DELETE-TASK',
		todoId,
		idTask
	} as const;
};

export const changeStatusTask = (
	todoId: string,
	taskId: string,
	isDone: boolean
) => {
	return {
		type: 'CHANGE-STATUS',
		todoId,
		taskId,
		isDone
	} as const;
};

export const editTitleTask = (
	todoId: string,
	taskId: string,
	title: string
) => {
	return {
		type: 'EDIT-TITLE-TASK',
		todoId,
		taskId,
		title
	} as const;
};

//types

export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
};
export type FilterTasksType = 'All' | 'Completed' | 'Active';
export type TodolistType = {
	id: string;
	filter: FilterTasksType;
	tasks: TaskType[];
};

export type TodolistActionsType =
	| AddTaskType
	| CreateTodoList
	| DeleteTaskType
	| EditTitleTaskType
	| ChangeStatusTaskType;

export type AddTaskType = ReturnType<typeof addTask>;
export type DeleteTaskType = ReturnType<typeof deleteTask>;
export type CreateTodoList = ReturnType<typeof createTodoList>
export type EditTitleTaskType = ReturnType<typeof editTitleTask>;
export type ChangeStatusTaskType = ReturnType<typeof changeStatusTask>;
