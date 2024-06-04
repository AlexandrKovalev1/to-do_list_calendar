import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import classes from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

type Props = {
	Xtype: 'default' | 'next' | 'prev' | 'add' | 'data';
	title?: string;
} & DefaultButtonPropsType;
export const Button: FC<Props> = ({
	onClick,
	className,
	disabled,
	title,
	Xtype
}) => {
	const finalClassName =
		(className ? className : '') +
		' ' +
		classes.button +
		(disabled ? ' ' + classes.disabled : '') +
		(Xtype === 'prev' || Xtype === 'next'
			? ` ${classes.arrow} ${classes[Xtype]}`
			: Xtype === 'data'
				? ' ' + classes.data
				: ' ');
	return (
		<button onClick={onClick} className={finalClassName} disabled={disabled}>
			{title && title}
		</button>
	);
};
