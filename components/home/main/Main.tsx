import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  container: {
    composes: 'flexRow alignCenter justifyCenter',
  },
  title: {
    composes: 'font-Montserrat-regular',
    color: theme.colors.accent,
  },
}));

export type Props = { text: string };
const Main = ({ text }: Props) => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        {text}
      </h1>
      <img src='/images/bmw.jpg' alt="" />
    </main>
  );
};

export default Main;