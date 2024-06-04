import classes from '../Calendar.module.css';
import { FC } from 'react';
import { ModeType } from '../CalendarTypes';

export const YearsMode: FC<YearsModeProps> = ({
	selectedYearInterval,
	selectedYear,
	setSelectedYear,
	setMode
}) => {
	return (
		<div className={classes.pick_item_container}>
			<div className={classes.unchoosable_year}>
				{selectedYearInterval[0] - 1}
			</div>
			{selectedYearInterval.map(year => (
				<Year
					key={year}
					year={year}
					selectedYear={selectedYear}
					setSelectedYear={setSelectedYear}
					setMode={setMode}
				/>
			))}
			<div className={classes.unchoosable_year}>
				{selectedYearInterval[selectedYearInterval.length - 1] + 1}
			</div>
		</div>
	);
};

const Year: FC<YearPropsType> = ({
	year,
	setSelectedYear,
	selectedYear,
	setMode
}) => {
	const isCurrentYear = new Date().getFullYear() === year;
	const isSelectedYear = year === selectedYear;

	const onClickHandler = () => {
		setSelectedYear(year);
		setMode('months');
	};

	const finalClass = [
		classes.pick_item,
		isCurrentYear ? classes.today : '',
		isSelectedYear ? classes.selected : ''
	].join(' ');

	return (
		<div aria-hidden onClick={onClickHandler} className={finalClass}>
			{year}
		</div>
	);
};

//types

type YearsModeProps = {
	selectedYearInterval: number[];
	selectedYear: number;
	setSelectedYear: (year: number) => void;
	setMode: (mode: ModeType) => void;
};

type YearPropsType = {
	year: number;
	selectedYear: number;
	setSelectedYear: (year: number) => void;
	setMode: (mode: ModeType) => void;
};
