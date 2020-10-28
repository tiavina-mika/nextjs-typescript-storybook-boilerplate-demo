import React from 'react';
import Head from 'next/head';
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

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.container}>
        <h1 className={classes.title}>
          Welcome to 
          {' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <img src='/images/bmw.jpg' alt="" />
      </main>
    </div>
  );
};

export default Home;