import { Calendar } from './Calendar/Calendar';
import classes from './CalendarBlock.module.css';

export const CalendarBlock = () => {
	return (
		<div className={classes.wrapper}>
			<Calendar />
		</div>
	);
};
