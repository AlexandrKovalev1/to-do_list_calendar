import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../TodolistsBlock.module.css';
import { useAppSelector } from '../../../redux/store/store';
import {
	setWeekDays,
	toggleDisplayTaskMode
} from '../../../redux/reducers/appReducer';
import { getDaysOfWeek } from '../../../utils/helpers/getDaysOfWeek';

export const TodoListsBlockHeader = () => {
	const [open, setOpen] = useState(false);
	const selectedDay = useAppSelector(state => state.app.selectedDay);
	const mode = useAppSelector(state => state.app.taskDisplayMode);

	const dispatch = useDispatch();

	const heading = mode === 'day' ? 'Tasks for the day' : 'Tasks for the week';

	const onClickTodayHandler = () => {
		setOpen(!open);
		dispatch(toggleDisplayTaskMode('day'));
	};

	const onClickForWeekHandler = () => {
		setOpen(!open);
		dispatch(toggleDisplayTaskMode('week'));
		dispatch(setWeekDays(getDaysOfWeek(selectedDay)));
	};
	const onClickMenuHandler = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.heading}>
			<h2>{heading}</h2>
			<div className={classes.menu}>
				<button className={classes.filter} onClick={onClickMenuHandler} />
				{open && (
					<span>
						<button
							className={classes.filter_item}
							disabled={mode === 'day'}
							onClick={onClickTodayHandler}
						>
							Tasks for the day
						</button>
						<button
							className={classes.filter_item}
							disabled={mode === 'week'}
							onClick={onClickForWeekHandler}
						>
							Tasks for the week
						</button>
					</span>
				)}
			</div>
		</div>
	);
};
