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
  // intersecting 여부를 파악하기 위한 element 를 지정하기 위해 useRef 를 활용
  const observerTargetElement: any = useRef<HTMLDivElement>(null);
  const { storeCategori } = useSelector((state: rootReducerType) => state.post);

  // useSWRInfinite 활용 의류 데이터 누적
  const FetchInMobile = SWR.getInfiniteItems(storeCategori, windowWidth);
  // setSize 를 통해 size 를 증가시키고, 증가된 size 에 따라 nextcursor 를 변경하여 데이터를 누적, 혹은 마지막 데이터 여부 확인
  const { itemsArrayInMobile, setSize, isReachedEnd, isLoadingMobile, infinitiValidating } = FetchInMobile;
  // 날짜 형식 변경
  const accumulationItems = modifyItmesPurchaseDate(itemsArrayInMobile);

  const option = useMemo(() => {
    return { root: null, threshold: 0.3 };
  }, []);

  let isIntersecting = useOnScreen<HTMLDivElement>(observerTargetElement, option, windowWidth, isReachedEnd);

  // 설정해둔 viewpoint 가 intersecting element 와 일정 부분이상 교차될 때 isIntersecting -> true
  // size 를 1씩 증가시켜 useSWRInfinite 의 nextcursor 변경
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
