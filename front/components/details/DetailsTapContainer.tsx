import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../reducers/types';

import { ConfigProvider, Tabs } from 'antd';
import { extractMeasureDataInSingleItem } from '../../util/Details/modifyData';
import { capitalizeFirstWord, convertNumberToLocales } from '../../util/PrimitiveUtils/string';
import TapChildren from './TapChidren';

const DetailsTapContainer = () => {
  const { singleItem } = useSelector((state: rootReducerType) => state.post);
  const { measureValue } = extractMeasureDataInSingleItem(singleItem);

  return (
    <TapContainer>
      <ConfigProvider theme={{ token: { colorPrimary: '#46647a' } }}>
        <Tabs
          defaultActiveKey='1'
          items={[
            {
              label: 'About Item',
              key: '1',
              children: (
                <>
                  <TapChildren name='Color' unit='색상'>
                    <ColorCircle data={singleItem && singleItem.color}></ColorCircle>
                  </TapChildren>
                  <TapChildren name='Price' unit='₩'>
                    <span>{singleItem && convertNumberToLocales(singleItem.price)}</span>
                  </TapChildren>

                  <TapChildren name='Purchase Day' unit='월'>
                    <span>{singleItem && `${singleItem.purchaseDay.substring(0, 7)}`}</span>
                  </TapChildren>
                </>
              ),
            },
            {
              label: 'Measure Value',
              key: '2',
              children: (
                <>
                  {measureValue &&
                    measureValue.map(v => {
                      return (
                        <TapChildren name={capitalizeFirstWord(v[0])} unit={v[0] == 'size' ? 'mm' : 'cm'}>
                          <span>{v[1]}</span>
                        </TapChildren>
                      );
                    })}
                </>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </TapContainer>
  );
};

export default DetailsTapContainer;

const TapContainer = styled.div`
  width: 100%;
  height: auto;
`;

const ColorCircle = styled.div<{ data: string | number | null }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ data }) => data};
`;
