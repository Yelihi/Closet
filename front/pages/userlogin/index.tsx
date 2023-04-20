import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';

import authImage from '../../public/images/authRightImage.jpg';

import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';

import { GetServerSidePropsContext } from 'next';
import { SagaStore } from '../../store/configureStore';
import * as t from '../../reducers/type';

import wrapper from '../../store/configureStore';
import AuthLayout from '../../components/AuthLayout';

const UserLogin = () => {
  const [gotoAccount, setGotoAccount] = useState<boolean>(false);

  const toggleGotoAccount = () => {
    setGotoAccount(prev => !prev);
  };

  return (
    <Container>
      <Head>
        <title>closet</title>
        <meta name='description' content='이 페이지는 로그인 페이지입니다' />
      </Head>
      <Section>
        {gotoAccount ? <Signup toggleGotoAccount={toggleGotoAccount} /> : <Login toggleGotoAccount={toggleGotoAccount} />}
        <ImageBox>
          <Image alt='todo' src={authImage} width={500} height={500} priority={true} />
        </ImageBox>
      </Section>
    </Container>
  );
};

UserLogin.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  if (store.getState().user.me) {
    return {
      redirect: {
        destination: '/closet/overview',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default UserLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: whitesmoke;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  width: fit-content;
  height: 630px;
  background-color: white;
`;

const ImageBox = styled.div`
  position: relative;
  display: block;
  width: auto;
  height: 628px;
  padding: 20px;

  > img {
    width: 500px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
