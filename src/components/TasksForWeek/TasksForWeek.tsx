// @flow
import * as React from 'react';
import classes from '../TasksForDay/TasksFoDay.module.css';
import { Todolist } from '../TodoList/Todolist';

type Props = {};
export const TasksForWeek = (props: Props) => {
	return (
		<div className={classes.wrapper}>
			<Todolist />
			<Todolist />
			<Todolist />
			<Todolist />
			<Todolist />
			<Todolist />
			<Todolist />
		</div>
	);
};
