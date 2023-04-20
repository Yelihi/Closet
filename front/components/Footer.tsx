import Link from 'next/link';
import Image from 'rc-image';
import React from 'react';
import styled from 'styled-components';

import Intersection from './recycle/element/Intersection';
import { sidebarList } from './sidebar/ListName';

import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHead>CLOSET</FooterHead>
      <FooterListBox>
        {sidebarList
          .filter((v, i) => i < 5)
          .map((elem, j) => {
            return (
              <Link href={elem.path} key={j}>
                {elem.name}
              </Link>
            );
          })}
      </FooterListBox>
      <Intersection />
      <FooterBox>
        <CopyRightDiv>&copy;2023Yelihi.All rights reserved.</CopyRightDiv>
        <FooterLinkBox>
          <a href='https://github.com/Yelihi' target='_blank' aria-label='깃허브페이지로'>
            <FaGithub />
          </a>

          <a href='https://twitter.com/yelihi19_lg' target='_blank' aria-label='트위터페이지로'>
            <FaTwitter />
          </a>
        </FooterLinkBox>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 30px 25px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid rgba(30, 40, 51, 0.0671438); ;
`;

const FooterHead = styled.div`
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 12px;
`;

const FooterListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
  > a {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font.Logo};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-size: 13px;
    cursor: pointer;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const CopyRightDiv = styled.div`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-family: ${({ theme }) => theme.font.Efont};
`;

const FooterLinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    cursor: pointer;
  }
`;
