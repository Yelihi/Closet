import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import styled from 'styled-components';
import addHead from '../../../util/addHead';
import wrapper, { SagaStore } from '../../../store/configureStore';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import * as t from '../../../reducers/type';
import { media } from '../../../styles/media';

import PageLayout from '../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../components/recycle/layout/PageMainLayout';
import ProfileImage from '../../../components/admin/ProfileImage';
import RenderErrorPage from '../../../components/state/error/RenderErrorPage';
import ProfileForm from '../../../components/admin/ProfileForm';
import ProfilePatchButtons from '../../../components/admin/ProfilePatchButtons';
import { PiCameraLight } from 'react-icons/pi';

import { RefObjType } from '../../../components/admin/type/ProfilePatchButtons';
import { rootReducerType } from '../../../reducers/types';

const Administration = () => {
  const { loadToMyInfoError } = useSelector((state: rootReducerType) => state.user);
  const refObj = useRef<RefObjType>({
    childSaveButtonRef: null,
    childCencelButtonRef: null,
  });

  if (loadToMyInfoError) return <RenderErrorPage state='Admin' />;

  return (
    <PageLayout>
      <PageMainLayout istitle={false} hasEmpty={false}>
        <BackgroundContainer>
          <BackgroundPosition>
            <BackgroundChangeButton>
              <PiCameraLight />
            </BackgroundChangeButton>
            <ImageContainer>
              <ProfileImage />
            </ImageContainer>
          </BackgroundPosition>
        </BackgroundContainer>
        <MarginOnTop />
        <Header>
          <DummyDivision />
          <TitleSection>
            <Title>
              <h2>Profile</h2>
              <TopButtonBox>
                <ProfilePatchButtons refObj={refObj} />
              </TopButtonBox>
            </Title>
            <p>개인 정보를 수정하실 수 있습니다</p>
          </TitleSection>
        </Header>
        <MainSection>
          <ProfileForm ref={refObj} />
        </MainSection>
        <BottomButtonBox>
          <ProfilePatchButtons refObj={refObj} />
        </BottomButtonBox>
      </PageMainLayout>
    </PageLayout>
  );
};

export default addHead(Administration, 'closet', '이 페이지는 유저의 정보를 수정하는 페이지입니다');

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.RESET_UPLOAD_PAGE,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {},
  };
});

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url('/images/adminBackground1.jpg');
  background-size: cover;
`;

const BackgroundPosition = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundChangeButton = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: -10rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: auto;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    left: 5%;
    transform: translateX(0);
  }
`;

const MarginOnTop = styled.div`
  width: 100%;
  height: 17rem;
`;

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  ${media.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const DummyDivision = styled.div`
  width: calc(5% + 21rem);
  height: 10rem;

  ${media.tablet} {
    height: auto;
  }
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  height: auto;

  ${media.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > h2 {
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: 3rem;
  }

  ${media.tablet} {
    justify-content: space-between;
  }
`;

const MainSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const TopButtonBox = styled.div`
  display: none;
  width: fit-content;
  height: auto;

  ${media.tablet} {
    display: flex;
  }
`;

const BottomButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem 0;

  ${media.tablet} {
    display: none;
  }
`;
