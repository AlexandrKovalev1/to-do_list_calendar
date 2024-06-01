import { FC, useState } from 'react';
import classes from './Main.module.css';
import { Calendar } from '../../components/Calendar/Calendar';

type Props = {};
export const Main: FC<Props> = (props: Props) => {
	const [selectedDate, selectDate] = useState(new Date());
	return (
		<main className={classes.main}>
			<div>
				<Calendar selectDate={selectDate} selectedDate={selectedDate} />
			</div>
			<div>tasks</div>
		</main>
	);
};
