import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { onPhoneMenuClick } from '../../reducers/screenEvent';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import Background from '../recycle/Background';
import MobileList from './MobileList';
import { rootReducerType } from '../../reducers/types';

import { media } from '../../styles/media';

const MobileSideList = () => {
  const dispatch = useDispatch();
  const { isPhoneMenuClick } = useSelector((state: rootReducerType) => state.screenEvent);

  return (
    <>
      {isPhoneMenuClick && <Background />}
      <PhoneMenuContainer isPhoneMenuClick={isPhoneMenuClick}>
        <PhoneMenuBox>
          <MenuIcon>
            <div onClick={() => dispatch(onPhoneMenuClick())}>
              <MdOutlineArrowBackIosNew className='logo' />
            </div>
            <Image src='/images/smallLogo.png' alt='로고' width={36} height={36} />
          </MenuIcon>
          <ListBox>
            <MobileList />
          </ListBox>
        </PhoneMenuBox>
      </PhoneMenuContainer>
    </>
  );
};

export default MobileSideList;

interface MenuProps {
  isPhoneMenuClick: boolean;
}

const PhoneMenuContainer = styled.section<MenuProps>`
  position: absolute;
  top: 0;
  left: ${props => (props.isPhoneMenuClick ? '0px' : '-200px')};
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};
  z-index: 50;
  transition: left 0.15s ease-out;

  ${media.tablet} {
    display: none;
  }
`;

const PhoneMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 13px 24px;

  .logo {
    width: 25px;
    height: 25px;
    margin-top: 5px;
    cursor: pointer;
  }
`;

const ListBox = styled.div`
  margin-top: 50px;
`;
