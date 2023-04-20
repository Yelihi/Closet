import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Intersection from '../element/Intersection';

type myComponent = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  istitle?: boolean;
  hasEmpty?: boolean;
  skeleton?: boolean;
};

const PageMainLayout = ({ children, title, subTitle, istitle = true, hasEmpty, skeleton = false }: myComponent) => {
  return (
    <MainContainer>
      {istitle && (
        <ComponentHead>
          <h1>{title}</h1>
          <span>{subTitle}</span>
        </ComponentHead>
      )}
      {istitle && <Intersection />}
      <ChildrenContainer hasEmpty={hasEmpty} skeleton={skeleton}>
        {children}
      </ChildrenContainer>
    </MainContainer>
  );
};

export default PageMainLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 17px 24px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const ChildrenContainer = styled.div<{ hasEmpty: boolean | undefined; skeleton: boolean }>`
  width: 100%;
  height: ${props => (props.hasEmpty ? '700px' : 'auto')};
  margin-top: ${props => (props.hasEmpty ? '0' : '30px')};

  ${props =>
    props.skeleton &&
    css`
      animation: boxFade 2s 1s infinite linear alternate;

      @keyframes boxFade {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    `}
`;

const ComponentHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    font-size: 25px;
    line-height: 25px;
    font-family: ${({ theme }) => theme.font.Logo};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 20px;
  }

  > span {
    display: block;
    font-size: 15px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.font.Logo};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    margin-bottom: 10px;
    white-space: pre-wrap;
  }
`;
