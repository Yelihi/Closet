import React from 'react';
import styled from 'styled-components';

type ChartTitleProps = {
  title?: string;
  fallback?: boolean;
};

const ChartTitle = ({ title = '₩ 120000', fallback }: ChartTitleProps) => {
  if (fallback) {
    return <LoadingTitle />;
  } else {
    return <Title>{title}</Title>;
  }
};

export default ChartTitle;

const Title = styled.dd`
  display: block;
  font-size: clamp(40px, 2.2vw, 45px);
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

const LoadingTitle = styled(Title)`
  width: 25rem;
  height: clamp(40px, 2.2vw, 48px);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'Title' })}
`;
