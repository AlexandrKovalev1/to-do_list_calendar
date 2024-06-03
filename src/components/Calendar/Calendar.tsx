import { FC } from 'react';
import classes from './Calendar.module.css';
import { DaysMode } from './DaysMode/DaysMode';
import { YearsMode } from './YearsMode/YearsMode';
import { MonthsMode } from './MonthsMode/MonthsMode';
import { useCalendar } from '../../hooks/useCalendar';
import { useAppSelector } from '../../redux/store/store';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';

type Props = {
	locale?: string;
	firstWeekDay?: number;
};
export const Calendar: FC<Props> = ({
	locale = 'default',
	firstWeekDay = 2
}) => {
	let selectedDate = useAppSelector<Date>(state => state.app.selectedDay);

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
							monthIndex={state.selectedMonth.monthIndex}
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
