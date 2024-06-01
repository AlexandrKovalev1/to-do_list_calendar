import { FC } from 'react';
import classes from './Header.module.css';

type Props = {};
export const Header: FC<Props> = (props: Props) => {
	return <header className={classes.header}>Header</header>;
};
