import { useMemo, useState } from 'react';
import {
	createDate,
	createMonth,
	getMonthNumberOfDays,
	getMonthsNames,
	getWeekDaysNames
} from '../utils/helpers/date';

type UseCalendarParams = {
	locale?: string;
	selectedDate: Date;
	firstWeekDay: number;
};

const getYearsInterval = (year: number) => {
	const startYear = Math.floor(year / 10) * 10;
	return [...Array(10)].map((_, i) => startYear + i);
};

export const useCalendar = ({
	locale = 'default',
	selectedDate,
	firstWeekDay
}: UseCalendarParams) => {
	const [mode, setMode] = useState<'days' | 'months' | 'years'>('days');
	const [selectedDay, setSelectedDay] = useState(
		createDate({ date: selectedDate })
	);
	const [selectedMonth, setSelectedMonth] = useState(
		createMonth({
			date: new Date(selectedDay.year, selectedDay.monthIndex),
			locale
		})
	);
	const [selectedYear, setSelectedYear] = useState(selectedDay.year);
	const [selectedYearInterval, setSelectedYearInterval] = useState(
		getYearsInterval(selectedDay.year)
	);

	const monthsNames = useMemo(() => getMonthsNames(locale), []);
	const weekDaysNames = useMemo(
		() => getWeekDaysNames(locale, firstWeekDay),
		[]
	);

	const days = useMemo(
		() => selectedMonth.createMonthDays(),
		[selectedMonth, selectedYear]
	);

	const calendarDays = useMemo(() => {
		const monthNumberOfDays = getMonthNumberOfDays(
			selectedMonth.monthIndex,
			selectedYear
		);

		const prevMonthDays = createMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex - 1),
			locale
		}).createMonthDays();
		const nextMonthDays = createMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex + 1),
			locale
		}).createMonthDays();

		const firstDay = days[0];
		const lastDay = days[monthNumberOfDays - 1];
		const shiftIndex = firstWeekDay - 1;

		const numberOfPrevDays =
			firstDay.dayNumberInWeek - 1 - shiftIndex < 0
				? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
				: firstDay.dayNumberInWeek - 1 - shiftIndex;

		const numberOfNextDays =
			7 - lastDay.dayNumberInWeek + shiftIndex > 6
				? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
				: 7 - lastDay.dayNumberInWeek + shiftIndex;

		const totalCalendarDays = days.length + numberOfNextDays + numberOfPrevDays;

		const result = [];

		for (let i = 0; i < numberOfPrevDays; i++) {
			const inverted = numberOfPrevDays - i;

			result[i] = prevMonthDays[prevMonthDays.length - inverted];
		}

		for (
			let i = totalCalendarDays - numberOfPrevDays;
			i < totalCalendarDays;
			i++
		) {
			result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
		}

		for (
			let i = numberOfPrevDays;
			i < totalCalendarDays - numberOfNextDays;
			i++
		) {
			result[i] = days[i - numberOfPrevDays];
		}
		return result;
	}, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

	const onClickArrow = (direction: 'prev' | 'next') => {
		if (mode === 'years' && direction === 'prev') {
			return setSelectedYearInterval(
				getYearsInterval(selectedYearInterval[0] - 10)
			);
		}

		if (mode === 'years' && direction === 'next') {
			return setSelectedYearInterval(
				getYearsInterval(selectedYearInterval[0] + 10)
			);
		}

		if (mode === 'months' && direction === 'prev') {
			const year = selectedYear - 1;
			if (!selectedYearInterval.includes(year))
				setSelectedYearInterval(getYearsInterval(year));
			return setSelectedYear(selectedYear - 1);
		}

		if (mode === 'months' && direction === 'next') {
			const year = selectedYear + 1;
			if (!selectedYearInterval.includes(year))
				setSelectedYearInterval(getYearsInterval(year));
			return setSelectedYear(selectedYear + 1);
		}

		if (mode === 'days') {
			const monthIndex =
				direction === 'prev'
					? selectedMonth.monthIndex - 1
					: selectedMonth.monthIndex + 1;

			if (monthIndex === -1) {
				const year = selectedYear - 1;
				setSelectedYear(year);
				if (!selectedYearInterval.includes(year))
					setSelectedYearInterval(getYearsInterval(year));
				return setSelectedMonth(
					createMonth({ date: new Date(year, 11), locale })
				);
			}

			if (monthIndex === 12) {
				const year = selectedYear + 1;
				setSelectedYear(year);
				if (!selectedYearInterval.includes(year))
					setSelectedYearInterval(getYearsInterval(year));
				return setSelectedMonth(
					createMonth({ date: new Date(year, 0), locale })
				);
			}
			return setSelectedMonth(
				createMonth({ date: new Date(selectedYear, monthIndex), locale })
			);
		}
	};

	const setSelectedMonthByIndex = (monthIndex: number) => {
		setSelectedMonth(
			createMonth({ date: new Date(selectedYear, monthIndex), locale })
		);
	};

	return {
		state: {
			mode,
			calendarDays,
			weekDaysNames,
			monthsNames,
			selectedDay,
			selectedMonth,
			selectedYear,
			selectedYearInterval
		},
		functions: {
			setMode,
			setSelectedDay,
			onClickArrow,
			setSelectedMonthByIndex,
			setSelectedYear
		}
	};
};
