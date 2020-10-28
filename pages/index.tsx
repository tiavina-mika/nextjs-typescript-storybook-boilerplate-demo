import React from 'react';
import Head from 'next/head';
import { createUseStyles } from 'react-jss';

import Main from '../components/home/main/Main';

const useStyles = createUseStyles((theme: any) => ({
  container: {
    composes: 'flexRow alignCenter justifyCenter',
  },
  title: {
    composes: 'font-Montserrat-regular',
    color: theme.colors.accent,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main text="Welcome to NextJs App" />
    </div>
  );
};

export default Home;