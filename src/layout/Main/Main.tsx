import { FC } from 'react';
import classes from './Main.module.css';
import { Calendar } from '../../components/Calendar/Calendar';
import { TodolistsBlock } from '../../components/TodolistsBlock/TodolistsBlock';

type Props = {};
export const Main: FC<Props> = (props: Props) => {
	return (
		<main className={classes.main}>
			<div className={classes.container}>
				<div>
					<Calendar />
				</div>
				<TodolistsBlock />
			</div>
		</main>
	);
};
