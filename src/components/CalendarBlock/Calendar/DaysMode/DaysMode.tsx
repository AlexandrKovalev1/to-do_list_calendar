import classes from '../Calendar.module.css';
import { FC, useEffect } from 'react';
import {
	checkDateIsEqual,
	checkIsToday
} from '../../../../utils/helpers/calendar/date';
import { DayType } from '../CalendarTypes';
import { useDispatch } from 'react-redux';
import {
	setSelectedDay,
	setWeekDays
} from '../../../../redux/reducers/appReducer';
import { useAppSelector } from '../../../../redux/store/store';
import { getDaysOfWeek } from '../../../../utils/helpers/getDaysOfWeek';

export const DaysMode: FC<DaysModeProps> = ({
	calendarDays,
	monthIndex,
	days
}) => {
	return (
		<>
			<DaysOfWeekName days={days} />
			<DaysOfWeek calendarDays={calendarDays} monthIndex={monthIndex} />
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

	const selectedDay = useAppSelector(state => state.app.selectedDay);
	const mode = useAppSelector(state => state.app.taskDisplayMode);
	const currentWeekdays = useAppSelector(state => state.app.selectedWeek);

	useEffect(() => {
		mode === 'week' &&
			!currentWeekdays.find(
				day => day.date.getTime() === selectedDay.getTime()
			) &&
			dispatch(setWeekDays(getDaysOfWeek(selectedDay)));
	}, [selectedDay, mode]);
	return (
		<div className={classes.days}>
			{calendarDays.map(day => {
				const today = checkIsToday(day.date);
				const isSelectedDay = selectedDay
					? checkDateIsEqual(day.date, selectedDay)
					: '';
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
