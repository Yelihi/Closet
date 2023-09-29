import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { onSearchClick, unmountSearchModal } from '../../reducers/screenEvent';
import { media } from '../../styles/media';
import { rootReducerType } from '../../reducers/types';
import { serviceList } from './Data';
import useDebounce from '../../hooks/useDebounce';

import Intersection from '../recycle/element/Intersection';
import SearchResultsList from './SearchResultsList';

import { HiOutlineSearch } from 'react-icons/hi';
import { IoCloseCircleOutline, IoCloseOutline } from 'react-icons/io5';

// Handles client-side transitions, this method is useful for cases where next/link is not enough.
const ShortCutNavigation = React.memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <ShortCutNaviContainer>
      <h4>서비스 바로 이용하기</h4>
      {serviceList.map(({ service, link, icon }) => {
        return (
          <NavigationContainer
            key={link}
            onClick={() => {
              dispatch(unmountSearchModal());
              router.push(link);
            }}
          >
            <NavigationIconBox>{icon}</NavigationIconBox>
            <NavigationText>{service}</NavigationText>
          </NavigationContainer>
        );
      })}
    </ShortCutNaviContainer>
  );
});

const SearchModal = () => {
  const dispatch = useDispatch();
  const { isSearchClick } = useSelector((state: rootReducerType) => state.screenEvent);
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [isDelayed, setIsDelayed] = useState<boolean>(false);

  const debouncedSearchValue = useDebounce(searchValue, 500, setIsDelayed);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsDelayed(true);
  };

  return (
    <ModalContainer isSearchClick={isSearchClick}>
      <SearchHeadContainer>
        <SearchInputContainer>
          <SearchIconBox>
            <Search />
          </SearchIconBox>
          <SearchInput
            type='text'
            placeholder='Search your Items..'
            value={searchValue}
            onChange={onChangeSearchValue}
          />
          {searchValue && (
            <DeleteInputValueIconBox>
              <DelelteValue onClick={() => setSearchValue('')} />
            </DeleteInputValueIconBox>
          )}
        </SearchInputContainer>
        <CloseIconBox>
          <Close onClick={() => dispatch(onSearchClick())} />
        </CloseIconBox>
      </SearchHeadContainer>
      <Intersection />
      <ShortCutNavigation />
      <Intersection />
      <SearchListSection>
        <SearchResultsList delayedValue={debouncedSearchValue} isDelayed={isDelayed} />
      </SearchListSection>
    </ModalContainer>
  );
};

export default SearchModal;

const ModalContainer = styled.section<{ isSearchClick: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brown};
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props =>
    props.isSearchClick &&
    css`
      opacity: 0.999;
      z-index: 100;
    `}

  ${media.tablet} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: auto;
    border-radius: 2rem;
  }
`;

const SearchHeadContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  padding: 2rem;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteInputValueIconBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const Search = styled(HiOutlineSearch)`
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const Close = styled(IoCloseOutline)`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
`;

const DelelteValue = styled(IoCloseCircleOutline)`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

// ShortCutNavagation

const ShortCutNaviContainer = styled.section`
  padding: 2rem;
  width: 100%;
  height: auto;

  > h4 {
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.symbol};
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1.5rem;
  padding: 1.2rem 0;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainGrey};
  }
`;

const NavigationIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;

  .logo {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.brown};
  }
`;

const NavigationText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.brown};
`;

// ListContainer

const SearchListSection = styled.div`
  width: 100%;
  height: auto;
`;
