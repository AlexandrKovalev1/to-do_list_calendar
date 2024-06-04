import { useAppSelector } from '../../../redux/store/store';
import classes from '../TodolistsBlock.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	setWeekDays,
	toggleDisplayTaskMode
} from '../../../redux/reducers/appReducer';
import { getDaysOfWeek } from '../../../utils/helpers/getDaysOfWeek';

type Props = {};
export const TodoListsBlockHeader = (props: Props) => {
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

	return (
		<div className={classes.heading}>
			<h2>{heading}</h2>
			<div className={classes.menu}>
				<button
					className={classes.filter}
					onClick={() => setOpen(!open)}
				></button>
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
