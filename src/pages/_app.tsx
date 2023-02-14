import '../styles/global.css';
import '../styles/plugins.css';
import '../styles/custom.css';
// import '../styles/main.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { AppProps } from 'next/app';
import { Provider } from 'overmind-react';

import { store } from '@/overmind/index';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider value={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
