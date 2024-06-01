import classes from './Calendar.module.css';
import { FC } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { Button } from '../Button/Button';
import { MonthsNames } from './MonthsNames/MonthsNames';
import { DaysMode } from './DaysMode/DaysMode';

type Props = {
	locale?: string;
	selectedDate: Date;
	selectDate: (date: Date) => void;
	firstWeekDay?: number;
};
export const Calendar: FC<Props> = ({
	locale = 'default',
	selectedDate,
	firstWeekDay = 2
}) => {
	const { state, functions } = useCalendar({
		locale,
		selectedDate,
		firstWeekDay
	});

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.header}>
					<Button
						Xtype={'prev'}
						onClick={() => functions.onClickArrow('prev')}
					/>
					{state.mode === 'days' && (
						<div aria-hidden onClick={() => functions.setMode('months')}>
							{state.monthsNames[state.selectedMonth.monthIndex].month}{' '}
							{state.selectedYear}
						</div>
					)}
					{state.mode === 'months' && (
						<div aria-hidden onClick={() => functions.setMode('years')}>
							{state.selectedYear}
						</div>
					)}
					{state.mode === 'years' && (
						<div aria-hidden onClick={() => functions.setMode('days')}>
							{state.selectedYearInterval[0]} -{' '}
							{
								state.selectedYearInterval[
									state.selectedYearInterval.length - 1
								]
							}
						</div>
					)}
					<Button
						Xtype={'next'}
						onClick={() => functions.onClickArrow('next')}
					/>
				</div>
				<div className={classes.body}>
					{state.mode === 'days' && (
						<DaysMode
							calendarDays={state.calendarDays}
							selectedDay={state.selectedDay.date}
							monthIndex={state.selectedMonth.monthIndex}
							setSelectedDay={functions.setSelectedDay}
							days={state.weekDaysNames}
						/>
					)}
					{state.mode === 'months' && (
						<MonthsNames
							monthsNames={state.monthsNames}
							selectedYear={state.selectedYear}
							selectedMonthIndex={state.selectedMonth.monthIndex}
							setMode={functions.setMode}
							setMonth={functions.setSelectedMonthByIndex}
						/>
					)}
					{state.mode === 'years' && (
						<div className={classes.pick_item_container}>
							<div className={classes.unchoosable_year}>
								{state.selectedYearInterval[0] - 1}
							</div>
							{state.selectedYearInterval.map(year => {
								const isCurrentYear = new Date().getFullYear() === year;
								const isSelectedYear = year === state.selectedYear;

								const finalClass =
									classes.pick_item +
									(isCurrentYear ? ' ' + classes.today : ' ') +
									(isSelectedYear ? ' ' + classes.selected : ' ');

								return (
									<div
										key={year}
										aria-hidden
										onClick={() => {
											functions.setSelectedYear(year);
											functions.setMode('months');
										}}
										className={finalClass}
									>
										{year}
									</div>
								);
							})}
							<div className={classes.unchoosable_year}>
								{state.selectedYearInterval[
									state.selectedYearInterval.length - 1
								] + 1}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
