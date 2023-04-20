import React from 'react';
import { IconBaseProps } from 'react-icons';
import styled from 'styled-components';
import CountUp from 'react-countup';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import { media } from '../../styles/media';

type Props = {
  Icon: React.ReactElement;
  DataTitle: string;
  LastData?: number;
  CurrentData?: number;
  Categori?: string;
  isLoading?: boolean;
};

const ProcessingDataCard = ({ Icon, DataTitle, LastData = 0, CurrentData = 0, Categori, isLoading }: Props) => {
  let percent = Math.floor(((CurrentData - LastData) / LastData) * 100);

  if (isLoading) {
    return (
      <CardBox>
        <DataBox>
          <SKIconBox></SKIconBox>
          <TitleBox>
            <SKTitle></SKTitle>
            <SKCurrent></SKCurrent>
          </TitleBox>
        </DataBox>
        <PercentBox>
          <SKPercentBorder></SKPercentBorder>
        </PercentBox>
      </CardBox>
    );
  }

  return (
    <CardBox>
      <DataBox>
        <IconBox>
          <div>{Icon}</div>
        </IconBox>
        <TitleBox>
          <Title>{DataTitle}</Title>
          <Current>{Categori ? Categori : <CountUp end={CurrentData} duration={2} />}</Current>
        </TitleBox>
      </DataBox>
      <PercentBox>
        <PercentBorder>
          {percent >= 0 ? <AiOutlineArrowUp className='Arrow' /> : <AiOutlineArrowDown className='Arrow' />}
          {`${Math.abs(percent)}%`}
        </PercentBorder>
      </PercentBox>
    </CardBox>
  );
};

export default ProcessingDataCard;

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: auto;
  padding: 20px;
  gap: 0;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${media.phone} {
    gap: 10px;
    width: 100%;
    height: auto;
  }
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 5px;
  margin-bottom: 30px;

  .icon {
    width: 23px;
    height: 23px;
    margin-top: 5px;
  }

  ${media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.mainGrey};
    border-radius: 5px;
    margin-bottom: 30px;
  }
`;

const SKIconBox = styled(IconBox)`
  border: none;
  background-color: ${({ theme }) => theme.colors.hoverGrey};

  ${media.tablet} {
    border: none;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  font-size: clamp(9px, 1.5vw, 12px);
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.middleGrey};
  width: 100%;
  margin-bottom: 10px;
`;

const SKTitle = styled(Title)`
  width: 100px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const Current = styled.div`
  font-size: clamp(20px, 2.5vw, 27px);
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.black};
`;

const SKCurrent = styled(Current)`
  width: 150px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const PercentBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 5px;

  .Arrow {
    width: 14px;
    height: 14px;
    margin-bottom: 2px;
  }

  ${media.phone} {
    display: flex;
  }
`;

const PercentBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: fit-content;
  height: auto;
  padding: 8px;
  margin-top: 90px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.black};
`;

const SKPercentBorder = styled(PercentBorder)`
  width: 30%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border: none;
`;
