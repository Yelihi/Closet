export const config = {
  runtime: 'edge',
};

import { useEffect, useState, ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { SWRConfig } from 'swr';
import type { rootReducerType } from '../reducers/types';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import { ConfigProvider } from 'antd';

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
  const router = useRouter();
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

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router]);

  return (
    <SWRConfig>
      <ConfigProvider theme={{ token: { colorPrimary: 'hsl(23, 100%, 50%)' } }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle isPhoneMenuClick={isPhoneMenuClick} isSearchClick={isSearchClick} />
          {isTransitionLoading && <TransitionPageLoading />}
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ConfigProvider>
    </SWRConfig>
  );
};

export default wrapper.withRedux(MyApp);
