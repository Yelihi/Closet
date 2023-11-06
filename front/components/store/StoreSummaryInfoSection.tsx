import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { media } from '../../styles/media';
import ProcessingDataCard from '../recycle/ProcessingDataCard';
import { modifyUserItemCategoriData } from '../../util/Store/modifyData';
import { AiOutlineDatabase } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { CgRowFirst } from 'react-icons/cg';
import { rootReducerType } from '../../reducers/types';

const StoreSummaryInfoSection = () => {
  const { userItems } = useSelector((state: rootReducerType) => state.post);
  const { maxCategori, maxCategoriName, lastMaxCategori } = modifyUserItemCategoriData(userItems);

  return (
    <CardSection>
      <ProcessingDataCard
        Icon={<AiOutlineDatabase className='icon' />}
        DataTitle='Total Clothes'
        LastData={userItems?.lastTotal}
        CurrentData={userItems?.total}
      />
      <ProcessingDataCard
        Icon={<GiPayMoney className='icon' />}
        DataTitle='Total Price'
        LastData={userItems?.lastPrice}
        CurrentData={userItems?.price}
      />
      <ProcessingDataCard
        Icon={<CgRowFirst className='icon' />}
        DataTitle='Most Unit'
        LastData={lastMaxCategori}
        CurrentData={maxCategori}
        Categori={maxCategoriName}
      />
    </CardSection>
  );
};

export default StoreSummaryInfoSection;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 15px;
  margin-bottom: 20px;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
`;
