import classes from './Calendar.module.css';
import { FC } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { formatDate } from '../../utils/helpers/date/formatDate';
import { Button } from '../Button/Button';

type Props = {
	locale?: string;
	selectedDate: Date;
	selectDate: (date: Date) => void;
	firstWeekDay?: number;
};
export const Calendar: FC<Props> = ({
	locale = 'default',
	selectedDate: Date,
	firstWeekDay = 2
}) => {
	const { state } = useCalendar({ locale, selectedDate: Date, firstWeekDay });
	console.log(state.selectedYear);
	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<div className={classes.header}>
					<Button Xtype={'prev'} />
					{state.mode === 'days' && (
						<div>
							{state.monthsNames[state.selectedMonth.monthIndex].month}{' '}
							{state.selectedYear}
						</div>
					)}
					{state.mode === 'months' && (
						<div>{state.selectedMonth.monthName}</div>
					)}
					{state.mode === 'years' && (
						<div>
							{state.selectedYearInterval[0]} -{' '}
							{
								state.selectedYearInterval[
									state.selectedYearInterval.length - 1
								]
							}
						</div>
					)}
					<Button Xtype={'next'} />
				</div>
			</div>
		</div>
	);
};
