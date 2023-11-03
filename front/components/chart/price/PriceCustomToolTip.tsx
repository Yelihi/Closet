import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SliceTooltipProps } from '@nivo/line';
import { getChartPointId } from '../../../reducers/chart';
import useDelayCall from '../../../hooks/useDelayCall';

export default function PriceCustomToolTip(device: 'desktop' | 'phone') {
  return function (props: SliceTooltipProps) {
    const dispatch = useDispatch();
    const reversePoints = props.slice.points.flat().reverse();
    let Index = reversePoints[0].index;

    const dispatchIndex = useCallback(() => {
      dispatch(getChartPointId(Index));
    }, [Index]);

    useDelayCall(dispatchIndex, Index);

    return (
      <ToolTipContainer>
        <ToolTipTitle>{device == 'desktop' ? Index + 1 : (Index + 1) * 2}월 별 총합(만원단위)</ToolTipTitle>
        {reversePoints.map(item => {
          return (
            <ToolTipItem>
              <span>{item.serieId}</span>
              <span>{item.data.yFormatted}</span>
            </ToolTipItem>
          );
        })}
      </ToolTipContainer>
    );
  };
}

const ToolTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBlack};
  border-radius: 0.5rem;
`;

const ToolTipTitle = styled.h2`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.orange};
`;

const ToolTipItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: auto;
`;
