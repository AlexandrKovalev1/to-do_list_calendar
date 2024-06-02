import { FC } from 'react';
import classes from './Main.module.css';
import { Calendar } from '../../components/Calendar/Calendar';
import { TasksFromDay } from '../../components/TodosFromDay/TodosFromDay';

type Props = {};
export const Main: FC<Props> = (props: Props) => {

	return (
		<main className={classes.main}>
			<div>
				<Calendar />
			</div>
		<div>
			<TasksFromDay/>
		</div>
		</main>
	);
};
