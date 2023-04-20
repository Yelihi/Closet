import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../../../config/config';
import { ResponsivePie } from '@nivo/pie';

import { data } from './data/TotalPieData';
import { categoriObject } from '../../store/TableData';

import { media } from '../../../styles/media';

type Props = {
  item: categoriObject;
};

const TotalPie = ({ item }: Props) => {
  const Key = Object.entries(item);
  const Color = ['hsl(309, 70%, 50%)', 'hsl(309, 70%, 50%)', 'hsl(180, 70%, 50%)', 'hsl(327, 70%, 50%)', 'hsl(168, 70%, 50%)', 'hsl(150, 70%, 50%)'];
  const Data = Key.map((cate, idx) => {
    return {
      id: cate[0],
      label: cate[0],
      value: cate[1],
      color: Color[idx],
    };
  });
  return (
    <PieContainer>
      <ResponsivePie
        data={Data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.4}
        padAngle={2}
        cornerRadius={3}
        fit={false}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purple_blue' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={11}
        arcLinkLabelsTextColor='#333333'
        arcLinkLabelsOffset={-1}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={23}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel='id'
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[]}
      />
    </PieContainer>
  );
};

export default TotalPie;

const PieContainer = styled.div`
  width: 70%;
  height: 70%;

  ${media.desktop} {
    width: 180px;
    height: 180px;
  }
`;
