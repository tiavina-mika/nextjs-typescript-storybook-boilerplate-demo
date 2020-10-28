import React from 'react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { ThemeProvider } from 'react-jss';

import '../styles/globals.css';
import '../styles.css';

const theme = {
  colors: {
    dark: '#000000',
    white: '#ffffff',
    primary: '#0c0c0c',
    secondary: '#898880',
    secondaryLight: '#C5C3BC',
    accent: '#80722A',
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
