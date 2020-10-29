import { ThemeProvider } from 'react-jss';
import { withPaddings } from 'storybook-addon-paddings';

import { theme } from '../pages/_app';


const viewports = {
  galaxyS5: {
    name: 'galaxy S5',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  pixel2: {
    name: 'pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  pixel2XL: {
    name: 'pixel 2 XL',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
  iphone678: {
    name: 'iphone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iphone678plus: {
    name: 'iphone 6/7/8 plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  iphoneX: {
    name: 'iphone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  ipad: {
    name: 'ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  ipadPro: {
    name: 'ipad pro',
    styles: {
      width: '1204px',
      height: '1366px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  hd: {
    name: 'HD',
    styles: {
      width: '1920px',
      height: '1024px',
    },
  },
  ultraHD: {
    name: 'ultra HD',
    styles: {
      width: '2500px',
      height: '1024px',
    },
  },
  
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: {
    viewports,
    defaultViewport: 'hd',
  },
  paddings: [
    { name: 'NoPadding', value: '0px', default: true },
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px' },
    { name: 'Large', value: '64px' },
  ],
}

export const decorators = [
  withPaddings,
  (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
  ),
];