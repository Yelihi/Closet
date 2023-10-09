import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Breadcrumb } from 'antd';

type CustomBreadProps = {
  nextPage: string;
};

const CustomBread = ({ nextPage }: CustomBreadProps) => {
  return (
    <HandleContainer>
      <Bread separator='>' items={[{ title: <Link href='/closet/overview'>Home</Link> }, { title: nextPage }]} />
    </HandleContainer>
  );
};

export default CustomBread;

const HandleContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;

const Bread = styled(Breadcrumb)`
  margin-bottom: 30px;
  .ant-breadcrumb-link {
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};

    > a {
      font-family: ${({ theme }) => theme.font.Efont};
      font-weight: ${({ theme }) => theme.fontWeight.Light};
    }
  }
`;
