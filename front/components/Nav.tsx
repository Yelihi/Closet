import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../reducers/types';
import { onPhoneMenuClick, onSearchClick } from '../reducers/screenEvent';

import styled from 'styled-components';
import { media } from '../styles/media';

import MoblieSideList from './sidebar/MobileSideList';

import { HiOutlineMenuAlt2, HiOutlineSearch } from 'react-icons/hi';

const Nav = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: rootReducerType) => state.user);

  return (
    <>
      <MoblieSideList />
      <NavContainer>
        <MenuContainer>
          <div>
            <Menu onClick={() => dispatch(onPhoneMenuClick())} />
          </div>
          <div>
            <Search onClick={() => dispatch(onSearchClick())} />
          </div>
        </MenuContainer>
        <InfoContainer>
          <SearchButtonContainer onClick={() => dispatch(onSearchClick())}>
            <InputSearch />
            <p>Search</p>
          </SearchButtonContainer>
          <HeadBox>
            <span>Closet Official</span>
            <p>{me?.nickname}</p>
          </HeadBox>
          <IconBox>
            <div></div>
          </IconBox>
        </InfoContainer>
      </NavContainer>
    </>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 13px 24px;
  background-color: ${({ theme }) => theme.colors.brown};

  ${media.tablet} {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }

  ${media.tablet} {
    width: 100%;

    > div {
      display: none;
    }
  }
`;

const Menu = styled(HiOutlineMenuAlt2)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const Search = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const InputSearch = styled(Search)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.brown};
  ${media.tablet} {
    display: block;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;

  ${media.tablet} {
    flex-shrink: 0;
    margin-left: 135px;
  }
`;

const SearchButtonContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-right: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 2.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainGrey};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  > span {
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-size: 12px;
    line-height: 14px;
  }

  > p {
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-size: 10px;
    line-height: 14px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  > div {
    background-image: url('/images/todo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
