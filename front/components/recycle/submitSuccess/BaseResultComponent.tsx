import React from 'react';
import styled from 'styled-components';
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';

import AButton from '../buttonElements/AButton';

type Props = {
  title: string;
  subTitle: string;
  status: ResultStatusType;
  onClickPrimary: () => void;
  onClick: () => void;
  buttonNamePrimary: string;
  buttonName: string;
};

const BaseResultComponent = ({
  title,
  subTitle,
  status,
  onClickPrimary,
  onClick,
  buttonNamePrimary,
  buttonName,
}: Props) => {
  return (
    <Container>
      <CustomResult
        status={status}
        title={title}
        subTitle={subTitle}
        extra={[
          <AButton
            color='black'
            key={buttonNamePrimary}
            onClick={onClickPrimary}
            dest={buttonNamePrimary}
            disabled={false}
          />,
          <AButton color='' key={buttonName} onClick={onClick} dest={buttonName} disabled={false} />,
        ]}
      />
    </Container>
  );
};

export default BaseResultComponent;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
`;

const CustomResult = styled(Result)`
  .ant-result-extra {
    display: flex;
  }
`;
