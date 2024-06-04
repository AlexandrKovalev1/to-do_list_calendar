import classes from './Main.module.css';
import { CalendarBlock } from '../../components/CalendarBlock/CalendarBlock';
import { TodolistsBlock } from '../../components/TodolistsBlock/TodolistsBlock';

export const Main = () => {
	return (
		<main>
			<div className={classes.container}>
				<CalendarBlock />
				<TodolistsBlock />
			</div>
		</main>
	);
};
