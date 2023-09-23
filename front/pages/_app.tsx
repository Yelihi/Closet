import { useEffect, useState, ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { SWRConfig } from 'swr';
import type { rootReducerType } from '../reducers/types';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Router from 'next/router';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';
import TransitionPageLoading from '../components/TransitionPageLoading';

type NewtPageAddLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsAddLayout = AppProps & {
  Component: NewtPageAddLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsAddLayout) => {
  const [isTransitionLoading, setIsTransitionLoading] = useState<boolean>(false);
  const { isPhoneMenuClick, isSearchClick } = useSelector((state: rootReducerType) => state.screenEvent);
  const getLayout = Component.getLayout || (page => <AppLayout>{page}</AppLayout>);

  useEffect(() => {
    const start = () => {
      setIsTransitionLoading(true);
    };
    const end = () => {
      setIsTransitionLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  });

  return (
    <SWRConfig>
      <ThemeProvider theme={theme}>
        <GlobalStyle isPhoneMenuClick={isPhoneMenuClick} isSearchClick={isSearchClick} />
        {isTransitionLoading && <TransitionPageLoading />}
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SWRConfig>
  );
};

export default wrapper.withRedux(MyApp);
