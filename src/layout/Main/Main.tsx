import { FC } from 'react';
import classes from './Main.module.css';
import { TodolistsBlock } from '../../components/TodolistsBlock/TodolistsBlock';
import { CalendarBlock } from '../../components/CalendarBlock/CalendarBlock';

type Props = {};
export const Main: FC<Props> = (props: Props) => {
	return (
		<main className={classes.main}>
			<div className={classes.container}>
				<CalendarBlock />
				<TodolistsBlock />
			</div>
		</main>
	);
};
