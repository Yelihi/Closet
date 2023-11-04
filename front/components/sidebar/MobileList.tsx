import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { sidebarList, dropList } from './data/ListName';

const MobileList = () => {
  const dispatch = useDispatch();
  const [clickDrop, setClickDrop] = useState<boolean>(false);

  const onClickDrop = useCallback(() => {
    setClickDrop(prev => !prev);
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <ListContainer>
      <ul key='mobileSidebar'>
        {sidebarList.map((prop, i) => {
          return i === 2 ? (
            <div key={i}>
              <ListBox key={i} direction='true' onClick={onClickDrop}>
                <div>
                  <div>
                    {prop.icon}
                    <li>{prop.name}</li>
                  </div>
                  <ArrowIcon className='logo' clickdrop={clickDrop.toString()} />
                </div>
              </ListBox>
              <DropListContainer clickdrop={clickDrop.toString()}>
                {dropList.map((prop, j) => {
                  return (
                    <Link key={j} href={prop.path}>
                      <DropListBox clickdrop={clickDrop.toString()}>
                        <div>{prop.icon}</div>
                        <li>{prop.name}</li>
                      </DropListBox>
                    </Link>
                  );
                })}
              </DropListContainer>
            </div>
          ) : i == 5 ? (
            <Link key={i} href={prop.path} onClick={() => logout()}>
              <ListBox direction='false'>
                {prop.icon}
                <li>{prop.name}</li>
              </ListBox>
            </Link>
          ) : (
            <Link key={i} href={prop.path}>
              <ListBox direction='false'>
                {prop.icon}
                <li>{prop.name}</li>
              </ListBox>
            </Link>
          );
        })}
      </ul>
    </ListContainer>
  );
};

export default MobileList;

const ListContainer = styled.div`
  width: 100%;
  height: fit-content;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ListBox = styled.div<{ direction: 'true' | 'false' }>`
  display: flex;
  flex-direction: ${props => (props.direction === 'true' ? 'column' : 'row')};
  justify-content: ${props => (props.direction === 'true' ? 'center' : 'flex-start')};
  align-items: ${props => (props.direction === 'true' ? 'flex-start' : 'center')};
  width: 100%;
  height: auto;
  margin: 4px 0;
  padding: 9px 30px 9px 30px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  cursor: pointer;

  li {
    display: block;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ArrowIcon = styled(MdOutlineKeyboardArrowDown)<{ clickdrop: string }>`
  transform: ${props => (props.clickdrop === 'true' ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.15s ease-in-out;
`;

const DropListContainer = styled.div<{ clickdrop: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: ${props => (props.clickdrop === 'true' ? '400px' : '0')};
  opacity: ${props => (props.clickdrop === 'true' ? 0.999 : 0)};
  overflow: hidden;
  transition: all 0.15s ease-in-out;

  > a {
    width: 100%;
  }
`;

const DropListBox = styled.div<{ clickdrop: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
