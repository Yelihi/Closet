import React, { useMemo } from 'react';
import styled from 'styled-components';

import { TbTransferIn } from 'react-icons/tb';

interface LinkCardLayoutProps {
  children: React.ReactNode;
  Subject: string;
  Address: string;
  onMove: () => void;
  divided?: number;
}

const LinkCardLayout = ({ children, Subject, Address, onMove, divided = 0 }: LinkCardLayoutProps) => {
  const iconStyle = useMemo(() => {
    return {
      width: '12px',
      height: '12px',
    };
  }, []);

  return (
    <MainContainer>
      <Container divide={divided}>
        <HeadSection>
          <Title>{Subject}</Title>
          <AddButton onClick={onMove}>
            <TbTransferIn style={iconStyle} />
            <div>{Address}</div>
          </AddButton>
        </HeadSection>
        {children}
      </Container>
    </MainContainer>
  );
};

export default LinkCardLayout;

const MainContainer = styled.section`
  position: relative;
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

const Container = styled.div<{ divide: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${props => (props.divide === 2 ? '140px' : props.divide === 1 ? '340px' : '100%')};
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;

  > div {
    font-size: 11px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
