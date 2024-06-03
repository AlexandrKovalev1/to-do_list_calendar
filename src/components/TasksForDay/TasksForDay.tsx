// @flow
import * as React from 'react';
import classes from './TasksFoDay.module.css';
import { Todolist } from '../TodoList/Todolist';

type Props = {};
export const TasksForDay = (props: Props) => {
	return (
		<div className={classes.wrapper}>
			<Todolist />
		</div>
	);
};
