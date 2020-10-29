import clsx from 'clsx';
import React, { MouseEvent } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  button: {
    composes: 'flexRow alignCenter justifyCenter',
  },
  title: {
    composes: 'font-Montserrat-regular',
    color: theme.colors.accent,
  },
  blueButton: {
    backgroundColor: 'blue',
  },
}));

export type Props = { text: string; onClick?: () => void; type?: 'submit' | 'button' | 'reset'; className?: string };
const Button = ({ text, onClick, type, className }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  const classes = useStyles();
  return (
    /* eslint-disable-next-line react/button-has-type */
    <button className={clsx(classes.button, className)} onClick={handleClick} type={type || 'button'}>
      {text}
    </button>
  );
};

export default Button;