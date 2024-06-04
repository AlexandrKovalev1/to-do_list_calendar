import classes from '../Calendar.module.css';
import { Button } from '../../../Button/Button';
import { ModeType, MonthsNameType } from '../CalendarTypes';
import { FC } from 'react';

export const CalendarHeader: FC<CalendarHeaderPropsType> = ({
	mode,
	onClickArrow,
	selectedYearInterval,
	setMode,
	selectedYear,
	monthsNames,
	selectedMonthIndex
}) => {
	const currentMonth = monthsNames[selectedMonthIndex].month;
	return (
		<div className={classes.header}>
			<Button Xtype={'prev'} onClick={() => onClickArrow('prev')} />
			{mode === 'days' && (
				<BlockOfHeading
					title={`${currentMonth} ${selectedYear}`}
					callBack={() => setMode('months')}
				/>
			)}
			{mode === 'months' && (
				<BlockOfHeading
					title={selectedYear}
					callBack={() => setMode('years')}
				/>
			)}
			{mode === 'years' && (
				<BlockOfHeading
					title={`${selectedYearInterval[0]} -
			${selectedYearInterval[selectedYearInterval.length - 1]}`}
					callBack={() => setMode('days')}
				/>
			)}
			<Button Xtype={'next'} onClick={() => onClickArrow('next')} />
		</div>
	);
};

const BlockOfHeading: FC<BlockHeadingPropsType> = ({ callBack, title }) => {
	const onClickHandler = () => {
		callBack();
	};
	return (
		<div aria-hidden onClick={onClickHandler}>
			{title}
		</div>
	);
};

//types

type CalendarHeaderPropsType = {
	mode: ModeType;
	onClickArrow: (direction: 'prev' | 'next') => void;
	selectedYearInterval: number[];
	setMode: (value: ModeType) => void;
	selectedYear: number;
	monthsNames: MonthsNameType[];
	selectedMonthIndex: number;
};

type BlockHeadingPropsType = {
	title: string | number;
	callBack: () => void;
};
