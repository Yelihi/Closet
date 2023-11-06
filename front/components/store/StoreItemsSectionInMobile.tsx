import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { SWR } from '../../util/SWR/API';
import useOnScreen from '../../hooks/useOnScreen';
import { modifyItmesPurchaseDate } from '../../util/Store/modifyData';
import StoreCardBoard from './StoreCardBoard';
import StoreMenuSection from './StoreMenuSection';
import { ItemsStoreSection } from './StoreItemsSectionInDesk';
import { rootReducerType } from '../../reducers/types';

type StoreItemsSectionInMobileProps = {
  windowWidth: 'desktop' | 'phone';
};

const StoreItemsSectionInMobile = ({ windowWidth }: StoreItemsSectionInMobileProps) => {
  const observerTargetElement: any = useRef<HTMLDivElement>(null);
  const { storeCategori } = useSelector((state: rootReducerType) => state.post);

  const FetchInMobile = SWR.getInfiniteItems(storeCategori, windowWidth);

  const { itemsArrayInMobile, setSize, isReachedEnd, isLoadingMobile, infinitiValidating } = FetchInMobile;

  const accumulationItems = modifyItmesPurchaseDate(itemsArrayInMobile);

  const option = useMemo(() => {
    return { root: null, threshold: 0.3 };
  }, []);

  let isIntersecting = useOnScreen<HTMLDivElement>(observerTargetElement, option, windowWidth, isReachedEnd);

  useEffect(() => {
    if (isIntersecting) {
      setSize(prev => prev + 1);
    }
  }, [isIntersecting]);

  return (
    <>
      <StoreMenuSection windowWidth={windowWidth} />
      <ItemsStoreSection>
        <StoreCardBoard
          itemData={accumulationItems}
          isItemsLoading={isLoadingMobile}
          infinitiValidating={infinitiValidating}
          windowWidth={windowWidth}
        />
        <Space />
        <div ref={observerTargetElement}></div>
      </ItemsStoreSection>
    </>
  );
};

export default StoreItemsSectionInMobile;

const Space = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`;
