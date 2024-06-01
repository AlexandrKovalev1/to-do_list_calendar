import { FC } from 'react';
import classes from './Footer.module.css';

type Props = {};
export const Footer: FC<Props> = (props: Props) => {
	return <footer className={classes.footer}>Footer</footer>;
};
