import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <AppLay>{children}</AppLay>
    </>
  );
};

export default AuthLayout;

const AppLay = styled(Layout)`
  /* min-height: 200%; */
  width: 100%;
  height: 100%;
`;
