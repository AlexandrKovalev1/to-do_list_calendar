import classes from '../Calendar.module.css';
import { FC } from 'react';
import {
	checkDateIsEqual,
	checkIsToday
} from '../../../utils/helpers/calendar/date';
import { DayType } from '../CalendarTypes';

export const DaysMode: FC<DaysModeProps> = ({
	calendarDays,
	selectedDay,
	monthIndex,
	setSelectedDay,
	days
}) => {
	return (
		<>
			<DaysOfWeekName days={days} />
			<DaysOfWeek
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
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
	selectedDay,
	monthIndex,
	setSelectedDay
}) => {
	return (
		<div className={classes.days}>
			{calendarDays.map(day => {
				const today = checkIsToday(day.date);
				const isSelectedDay = checkDateIsEqual(day.date, selectedDay);
				const isAdditionalDay = day.monthIndex !== monthIndex;

				const finalClass =
					classes.day +
					(today ? ' ' + classes.today : ' ') +
					(isSelectedDay ? ' ' + classes.selected : ' ') +
					(isAdditionalDay ? ' ' + classes.additional : ' ');

				return (
					<div
						key={day.date.toString()}
						className={finalClass}
						onClick={() => {
							setSelectedDay(day);
							console.log(day.time);
						}}
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
	selectedDay: Date;
	monthIndex: number;
	setSelectedDay: (day: DayType) => void;
};

type DaysOfWeekNameProps = {
	days: { day: string; dayShort: string }[];
};

type DaysModeProps = DaysOfWeekProps & DaysOfWeekNameProps;
