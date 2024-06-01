import { FC } from 'react';
import classes from './Main.module.css';

type Props = {};
export const Main: FC<Props> = (props: Props) => {
	return (
		<main className={classes.main}>
			<div>calendar</div>
			<div>tasks</div>
		</main>
	);
};
