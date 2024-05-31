import {
	addTask,
	deleteTask,
	changeStatusTask,
	editTitleTask,
	todolistReducer,
	TodolistType
} from './todolistReducer';

let initialState: TodolistType[];

describe('todolistReducer', () => {
	beforeEach(() => {
		initialState = [
			{
				id: '123',
				title: 'Demo',
				filter: 'All',
				tasks: [{ title: 'first', id: '456', isDone: false }]
			}
		];
	});

	test('should add a new task', () => {
		const todoId = '123';
		const newTaskTitle = 'New Task';
		const action = addTask(todoId, newTaskTitle);
		const newState = todolistReducer(initialState, action);

		expect(newState[0].tasks.length).toBe(2);
		expect(newState[0].tasks[0].title).toBe(newTaskTitle);
		expect(newState[0].tasks[0].isDone).toBe(false);
	});

	test('should delete a task', () => {
		const todoId = '123';
		const taskIdToDelete = '456';
		const action = deleteTask(todoId, taskIdToDelete);
		const newState = todolistReducer(initialState, action);

		expect(newState[0].tasks.length).toBe(0);
	});

	test('should change the status of a task', () => {
		const todoId = '123';
		const taskIdToChange = '456';
		const newStatus = true;
		const action = changeStatusTask(todoId, taskIdToChange, newStatus);
		const newState = todolistReducer(initialState, action);

		expect(newState[0].tasks[0].isDone).toBe(newStatus);
	});

	test('should edit the title of a task', () => {
		const todoId = '123';
		const taskIdToEdit = '456';
		const newTaskTitle = 'Updated Task';
		const action = editTitleTask(todoId, taskIdToEdit, newTaskTitle);
		const newState = todolistReducer(initialState, action);

		expect(newState[0].tasks[0].title).toBe(newTaskTitle);
	});
});
