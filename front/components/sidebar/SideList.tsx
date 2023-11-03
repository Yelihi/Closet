import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';

import { media } from '../../styles/media';
import useBreakpoints from '../../hooks/useBreakpoints';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { sidebarList, dropList } from './data/ListName';

const SideList = () => {
  const [clickDrop, setClickDrop] = useState<boolean>(false);
  const { desktop } = useBreakpoints();
  const dispatch = useDispatch();

  const onClickDrop = useCallback(() => {
    setClickDrop(prev => !prev);
  }, []);

  const logout = () => {
    dispatch(logoutRequestAction());
  };

  return (
    <ListContainer>
      <ul key='desktopSidebar'>
        {sidebarList.map((prop, i) => {
          return i === 2 ? (
            <Column key={i}>
              <ListBox direction='true' onClick={onClickDrop}>
                <div>
                  <div>
                    {prop.icon}
                    <li>{prop.name}</li>
                  </div>
                  {desktop && <ArrowIcon className='logo' clickDrop={clickDrop} />}
                </div>
              </ListBox>
              <DropListContainer clickDrop={clickDrop}>
                {dropList.map((prop, j) => {
                  return (
                    <Link key={j} href={prop.path}>
                      <DropListBox>
                        <div>{prop.icon}</div>
                        <li>{prop.name}</li>
                      </DropListBox>
                    </Link>
                  );
                })}
              </DropListContainer>
            </Column>
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

export default SideList;

const ListContainer = styled.div`
  width: 100%;
  height: fit-content;
  ${media.tablet} {
    position: sticky;
    position: -webkit-sticky;
    top: -1px;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  overflow: hidden;
  cursor: pointer;

  li {
    display: none;
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
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${media.desktop} {
    li {
      display: block;
    }

    .logo {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
  }
`;

const ArrowIcon = styled(MdOutlineKeyboardArrowDown)<{ clickDrop: boolean }>`
  transform: ${props => (props.clickDrop ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.15s ease-in-out;
`;

const DropListContainer = styled.div<{ clickDrop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: ${props => (props.clickDrop ? '400px' : '0')};
  opacity: ${props => (props.clickDrop ? 0.999 : 0)};
  overflow: hidden;
  transition: all 0.15s ease-in-out;

  > a {
    width: 100%;
  }
`;

const DropListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 30px;
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;

  > li {
    opacity: 0;
  }

  .logo {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${media.desktop} {
    padding-top: 9px;
    padding-bottom: 9px;

    > li {
      display: block;
      opacity: 0.999;
    }

    .logo {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
  }
`;
