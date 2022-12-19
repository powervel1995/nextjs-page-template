import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../interface/default.interface';
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
