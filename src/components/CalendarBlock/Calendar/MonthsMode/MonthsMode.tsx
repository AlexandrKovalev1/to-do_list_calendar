import classes from '../Calendar.module.css';
import { FC } from 'react';

type MonthType = {
	month: string;
	monthShort: string;
	monthIndex: number;
	date: Date;
};

type Props = {
	monthsNames: MonthType[];
	selectedYear: number;
	selectedMonthIndex: number;
	setMode: (value: 'days' | 'months' | 'years') => void;
	setMonth: (index: number) => void;
};
export const MonthsMode: FC<Props> = ({
	monthsNames,
	selectedYear,
	selectedMonthIndex,
	setMonth,
	setMode
}) => {
	return (
		<div className={classes.pick_item_container}>
			{monthsNames.map(monthName => {
				const isCurrentMonth =
					new Date().getMonth() === monthName.monthIndex &&
					new Date().getFullYear() === selectedYear;
				const isSelectedMonth = monthName.monthIndex === selectedMonthIndex;

				const finalClass =
					classes.pick_item +
					(isCurrentMonth ? ' ' + classes.today : ' ') +
					(isSelectedMonth ? ' ' + classes.selected : ' ');

				const onClickHandler = () => {
					setMode('days');
					setMonth(monthName.monthIndex);
				};

				return (
					<div
						key={monthName.monthShort}
						className={finalClass}
						onClick={onClickHandler}
					>
						{monthName.monthShort}
					</div>
				);
			})}
		</div>
	);
};
