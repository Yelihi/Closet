import { useSelector } from 'react-redux';
import { SWRConfig } from 'swr';
import type { rootReducerType } from '../reducers/types';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';
import { ReactElement, ReactNode, FunctionComponent } from 'react';

type NewtPageAddLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsAddLayout = AppProps & {
  Component: NewtPageAddLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsAddLayout) => {
  const { isPhoneMenuClick, isSearchClick } = useSelector((state: rootReducerType) => state.screenEvent);
  const getLayout = Component.getLayout || (page => <AppLayout>{page}</AppLayout>);

  return (
    <SWRConfig>
      <ThemeProvider theme={theme}>
        <GlobalStyle isPhoneMenuClick={isPhoneMenuClick} isSearchClick={isSearchClick} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SWRConfig>
  );
};

export default wrapper.withRedux(MyApp);
