import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { media } from '../styles/media';
import { Layout } from 'antd';

import Footer from './Footer';

import SideList from './sidebar/SideList';
import SideProfile from './sidebar/SideProfile';
import SearchModal from './search/SearchModal';
import Background from './recycle/Background';

import { rootReducerType } from '../reducers/types';

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isSearchClick } = useSelector((state: rootReducerType) => state.screenEvent);
  return (
    <>
      <AppLay>
        <SearchModal />
        {isSearchClick && <Background />}
        <MenuContainer>
          <SideBar>
            <StickyBox>
              <SideProfile />
              <SideList />
            </StickyBox>
          </SideBar>
          <MainFooterBox>
            <Main>{children}</Main>
            <Footer />
          </MainFooterBox>
        </MenuContainer>
      </AppLay>
    </>
  );
};

export default AppLayout;

const AppLay = styled(Layout)`
  /* min-height: 200%; */
  width: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

const MainFooterBox = styled.div`
  width: 100%;
  height: auto;
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
`;

const SideBar = styled.div`
  display: none;
  width: fit-content;
  height: auto;
  background: ${({ theme }) => theme.colors.brown};
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
  }
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
  }
`;

const StickyBox = styled.div`
  position: sticky;
  top: -1px;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
