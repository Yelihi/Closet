import { ReactElement } from 'react';
import { NextPageContext } from 'next';

import RenderNextErrorPage from '../components/state/error/RenderNextErrorPage';
import AuthLayout from '../components/AuthLayout';

type ErrorComponentProps = {
  statusCode?: number;
};

const CustomError = ({ statusCode }: ErrorComponentProps) => {
  return <RenderNextErrorPage state='Next' statusCode={statusCode} />;
};

CustomError.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
