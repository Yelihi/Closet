import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import addHead from '../../../util/addHead';
import dynamic from 'next/dynamic';
import useOnScreen from '../../../hooks/useOnScreen';

import Router from 'next/router';
import { useDispatch } from 'react-redux';
import * as t from '../../../reducers/type';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../store/configureStore';

import wrapper from '../../../store/configureStore';

import { Pagination, PaginationProps, Segmented, Dropdown, Button, MenuProps } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

import { AiOutlineDatabase, AiOutlinePlus } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { CgRowFirst } from 'react-icons/cg';
import { IoFilterCircleOutline } from 'react-icons/io5';

import PageLayout from '../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../components/recycle/layout/PageMainLayout';
import ProcessingDataCard from '../../../components/recycle/ProcessingDataCard';
import ATable from '../../../components/store/ATable';
import CardBoard from '../../../components/store/CardBoard';
import CustomBread from '../../../components/recycle/CustomBread';
import RenderErrorPage from '../../../components/state/error/RenderErrorPage';
import RenderEmptyPage from '../../../components/state/empty/RenderEmptyPage';

import { media } from '../../../styles/media';
import { StoreHeader, segmentItems } from '../../../components/store/data/TableData';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';
import useDeviceWidth from '../../../hooks/useDeviceWidth';

import { SWR } from '../../../util/SWR/API';
import { detectMobileDevice } from '../../../util/PrimitiveUtils/string';

const SkeletonStore = dynamic(() => import('../../../components/store/SkeletonStore'));

interface StoreProps {
  device: 'phone' | 'desktop';
  userAgent: string;
}

const Store = ({ device = 'desktop', userAgent }: StoreProps) => {
  const dispatch = useDispatch();
  const observerTargetElement: any = useRef<HTMLDivElement>(null);
  const { userItems, indexArray, deleteItemDone, loadItemsLoding, deleteItemLoding } = useSelector(
    (state: rootReducerType) => state.post
  );
  const [current, setCurrent] = useState(1);
  const [segment, setSegment] = useState<string | number>('Table');
  const [categoriName, setCategoriName] = useState('');
  const { windowWidth } = useDeviceWidth(device);

  let itemsIdArray = indexArray;
  if (categoriName) itemsIdArray = indexArray.filter(item => item.categori === categoriName);
  let pageIndex = (current - 1) * 9 - 1;
  let lastId = pageIndex >= 0 ? itemsIdArray[pageIndex].id : 0;

  const FetchInDesktop = SWR.getItemsPerPagenation(lastId, categoriName, windowWidth);
  const FetchInMobile = SWR.getInfiniteItems(categoriName, windowWidth);

  const { itemsInDesk, itemsArrayInDesk, errorInDesk, isLoadingDesk, mutateInDesk } = FetchInDesktop;
  const {
    itemsInMobile,
    itemsArrayInMobile,
    setSize,
    isReachedEnd,
    isLoadingMobile,
    infinitiMutate,
    infinitiValidating,
    errorInMobile,
  } = FetchInMobile;

  const option = useMemo(() => {
    return { root: null, threshold: 0.3 };
  }, []);

  let isIntersecting = useOnScreen<HTMLDivElement>(observerTargetElement, option, windowWidth, isReachedEnd);

  useEffect(() => {
    if (isIntersecting) {
      setSize(prev => prev + 1);
    }
  }, [isIntersecting]);

  let modifiedItems = [];
  let accumulationItems = [];
  if (windowWidth === 'desktop' && itemsArrayInDesk) {
    for (let cloth of itemsArrayInDesk) {
      modifiedItems.push({ ...cloth, purchaseDay: cloth.purchaseDay.substring(0, 7) });
    }
  }
  if (windowWidth === 'phone' && itemsArrayInMobile) {
    for (let cloth of itemsArrayInMobile) {
      accumulationItems.push({ ...cloth, purchaseDay: cloth.purchaseDay.substring(0, 7) });
    }
  }

  let maxCategoriName = 'Outer';
  let maxCategori = 0;
  let lastMaxCategori = 0;
  if (userItems && Object.keys(userItems.categori).length !== 0 && Object.keys(userItems.lastCategori).length !== 0) {
    maxCategoriName = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][0];
    maxCategori = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][1];
    lastMaxCategori = Object.entries(userItems.lastCategori)?.sort((a, b) => b[1] - a[1])[0][1];
  }

  const pageChange: PaginationProps['onChange'] = page => {
    setCurrent(page);
  };

  const itemRender = (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    if (type === 'page') {
      return (
        <div aria-label={`${page} 페이지 입니다`} role='button'>
          {page}
        </div>
      );
    }

    return originalElement;
  };

  const handleCategori: MenuProps['onClick'] = e => {
    setCategoriName(e.key);
    setSize(1);
  };

  const moveToAddPage = useCallback(() => {
    Router.push('/closet/add');
  }, []);

  const deleteItemAtTable = useCallback(
    (id: number) => () => {
      dispatch({
        type: t.DELETE_ITEM_REQUEST,
        data: { clothId: id },
      });
      if (Array.isArray(itemsArrayInDesk)) {
        const newData = itemsArrayInDesk.filter(item => item.id !== id);
        mutateInDesk({ ...itemsInDesk, items: newData }, { revalidate: false });
      }
      if (Array.isArray(itemsInMobile)) {
        const newPostItems = itemsInMobile.map(set => ({ ...set, items: set.items.filter(item => item.id !== id) }));
        infinitiMutate([...newPostItems], { revalidate: false });
      }
    },
    [itemsInDesk, itemsArrayInDesk, itemsInMobile, itemsArrayInMobile, windowWidth]
  );

  if (errorInDesk || errorInMobile) return <RenderErrorPage state='Store' />;
  if (
    !userItems ||
    userItems?.items.length === 0 ||
    (!isLoadingDesk &&
      windowWidth === 'desktop' &&
      !categoriName &&
      itemsArrayInDesk &&
      itemsArrayInDesk.length == 0) ||
    (!isLoadingMobile &&
      windowWidth === 'phone' &&
      !categoriName &&
      itemsArrayInMobile &&
      itemsArrayInMobile.length == 0)
  ) {
    return <RenderEmptyPage state='Store' />;
  }

  return (
    <SkeletonStore loadItemsLoading={loadItemsLoding} deleteItemLoding={deleteItemLoding} windowWidth={device}>
      <PageLayout>
        <PageMainLayout istitle={false}>
          <CustomBread nextPage='Store' />
          <TitleSection>
            <dl data-testid='storeTitle'>
              <Title>CHECK YOUR ITEMS</Title>
              <SubTitle>
                저장하신 전체 의류를 확인하실 수 있습니다.
                <br />
                카테고리별로 분류가 가능하며 원하시면 삭제도 가능합니다만 삭제는 신중하게 결정하시길 바랍니다.
                <br />
                개별 의류를 선택하시면 상세페이지로 이동합니다.
              </SubTitle>
            </dl>
          </TitleSection>
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
          <AddSection>
            <DictionaryBox>
              <dt>CLOTHES TABLE</dt>
              <dd>현재까지 저장된 보관 의류표</dd>
            </DictionaryBox>
            <AddButton onClick={moveToAddPage} data-testid='addProductButton'>
              <AiOutlinePlus style={{ width: '20px', height: '20px' }} />
              <div>ADD PRODUCT</div>
            </AddButton>
          </AddSection>
          <MenuSection>
            <DropdownBox data-testid='categoriSelect'>
              <Dropdown menu={{ items: segmentItems, onClick: handleCategori }}>
                <CButton>
                  <IoFilterCircleOutline className='icon' />
                  Categori
                </CButton>
              </Dropdown>
              <CategoriSpan data-testid='categoriLabel'>분류 : {categoriName}</CategoriSpan>
            </DropdownBox>
            <div>
              {windowWidth === 'desktop' ? (
                <Segmented
                  options={[
                    { value: 'Table', icon: <BarsOutlined /> },
                    { value: 'Kanban', icon: <AppstoreOutlined /> },
                  ]}
                  value={segment}
                  onChange={setSegment}
                />
              ) : null}
            </div>
          </MenuSection>
          <ItemsStoreSection data-testid='ItemSection'>
            {windowWidth === 'desktop' && segment === 'Table' ? (
              <ATable
                headData={StoreHeader}
                itemsData={modifiedItems}
                isDelete={true}
                onSubmit={deleteItemAtTable}
                isLoading={isLoadingDesk}
              />
            ) : null}
            {windowWidth === 'desktop' && segment === 'Kanban' ? (
              <CardBoard
                itemData={modifiedItems}
                onSubmit={deleteItemAtTable}
                isLoading={isLoadingDesk}
                windowWidth={windowWidth}
              />
            ) : null}
            {windowWidth === 'phone' ? (
              <CardBoard
                itemData={accumulationItems}
                onSubmit={deleteItemAtTable}
                isLoading={isLoadingDesk}
                isItemsLoading={isLoadingMobile}
                infinitiValidating={infinitiValidating}
                windowWidth={windowWidth}
              />
            ) : null}
            {windowWidth === 'desktop' ? (
              <div>
                <Pagination
                  current={current}
                  onChange={pageChange}
                  total={itemsIdArray?.length}
                  defaultPageSize={9}
                  itemRender={itemRender}
                  aria-label='페이지네이션 입니다'
                />
              </div>
            ) : null}
          </ItemsStoreSection>
          <Space></Space>
          <div ref={observerTargetElement}>store</div>
        </PageMainLayout>
      </PageLayout>
    </SkeletonStore>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  const userAgent = context.req ? context.req.headers['user-agent']! : '';
  const isMobile = detectMobileDevice(userAgent);
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.LOAD_ITEMS_REQUEST,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  if (!store.getState().user.me) {
    return {
      redirect: {
        destination: '/userlogin',
        permanent: false,
      },
    };
  }
  return {
    props: {
      device: isMobile ? 'phone' : 'desktop',
      userAgent: userAgent,
    },
  };
});

export default addHead(Store, 'closet', '이 페이지는 저장한 의류 전체를 보여주는 페이지입니다.');

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.dt`
  font-size: 25px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-bottom: 20px;
`;

const SubTitle = styled.dd`
  display: block;
  font-size: clamp(9px, 2.2vw, 15px);
  line-height: 18px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

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

const AddSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
`;

const DictionaryBox = styled.dl`
  > dt {
    font-size: clamp(13px, 1.5vw, 18px);
    line-height: 18px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 8px;
  }

  > dd {
    font-size: clamp(10px, 1.5vw, 14px);
    line-height: 15px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
  }
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
    display: none;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${media.middlePhone} {
    > div {
      display: block;
      font-size: clamp(12px, 1.8vw, 14px);
    }
  }
`;

const MenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 20px;
  margin-bottom: 20px;
`;

const DropdownBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const CButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .icon {
    width: 16px;
    height: 16px;
  }
`;

const CategoriSpan = styled.div`
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
`;

const ItemsStoreSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`;

const SpinDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
`;
