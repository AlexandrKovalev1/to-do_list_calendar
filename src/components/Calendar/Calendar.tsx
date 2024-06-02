import classes from './Calendar.module.css';
import { FC } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { MonthsMode } from './MonthsMode/MonthsMode';
import { DaysMode } from './DaysMode/DaysMode';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { YearsMode } from './YearsMode/YearsMode';

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
				<div className={classes.body}>
					<CalendarHeader
						mode={state.mode}
						onClickArrow={functions.onClickArrow}
						selectedYearInterval={state.selectedYearInterval}
						setMode={functions.setMode}
						selectedYear={state.selectedYear}
						monthsNames={state.monthsNames}
						selectedMonthIndex={state.selectedMonth.monthIndex}
					/>
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
						<MonthsMode
							monthsNames={state.monthsNames}
							selectedYear={state.selectedYear}
							selectedMonthIndex={state.selectedMonth.monthIndex}
							setMode={functions.setMode}
							setMonth={functions.setSelectedMonthByIndex}
						/>
					)}
					{state.mode === 'years' && (
						<YearsMode
							selectedYear={state.selectedYear}
							setSelectedYear={functions.setSelectedYear}
							setMode={functions.setMode}
							selectedYearInterval={state.selectedYearInterval}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
