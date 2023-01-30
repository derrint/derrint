import '../styles/global.css';
import '../styles/plugins.css';
import '../styles/custom.css';
import '../styles/main.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
