import classes from '../Calendar.module.css';
import { FC } from 'react';
import {
	checkDateIsEqual,
	checkIsToday
} from '../../../utils/helpers/calendar/date';
import { DayType } from '../CalendarTypes';
import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../../../redux/reducers/appReducer';
import { useAppSelector } from '../../../redux/store/store';

export const DaysMode: FC<DaysModeProps> = ({
																							calendarDays,
																							monthIndex,
																							days
																						}) => {
	return (
		<>
			<DaysOfWeekName days={days} />
			<DaysOfWeek
				calendarDays={calendarDays}
				monthIndex={monthIndex}
			/>
		</>
	);
};

export const DaysOfWeekName: FC<DaysOfWeekNameProps> = ({ days }) => {
	return (
		<div className={classes.week_names}>
			{days.map(day => (
				<div key={day.day}>{day.dayShort}</div>
			))}
		</div>
	);
};

export const DaysOfWeek: FC<DaysOfWeekProps> = ({
																									calendarDays,
																									monthIndex
																								}) => {

	const dispatch = useDispatch();
	const selectedDay = useAppSelector<Date>(state => state.app.selectedDay)
	return (
		<div className={classes.days}>
			{calendarDays.map(day => {
				const today = checkIsToday(day.date);
				const isSelectedDay = checkDateIsEqual(day.date, selectedDay);
				const isAdditionalDay = day.monthIndex !== monthIndex;

				const onClickDayHandler = () => {
					dispatch(setSelectedDay(day.date));
				};

				const finalClass =
					classes.day +
					(today ? ' ' + classes.today : ' ') +
					(isSelectedDay ? ' ' + classes.selected : ' ') +
					(isAdditionalDay ? ' ' + classes.additional : ' ');

				return (
					<div
						key={day.date.toString()}
						className={finalClass}
						onClick={onClickDayHandler}
					>
						{day.dayNumber}
					</div>
				);
			})}
		</div>
	);
};

//types

type DaysOfWeekProps = {
	calendarDays: DayType[];

	monthIndex: number;
};

type DaysOfWeekNameProps = {
	days: { day: string; dayShort: string }[];
};

type DaysModeProps = DaysOfWeekProps & DaysOfWeekNameProps;
