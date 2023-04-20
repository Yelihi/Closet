import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import * as t from '../../../../reducers/type';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import addHead from '../../../../util/addHead';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../../store/configureStore';

import wrapper from '../../../../store/configureStore';

import { Breadcrumb, ConfigProvider, Rate, Tabs } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../../../reducers/types';

import PageLayout from '../../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../../components/recycle/layout/PageMainLayout';
import Slice from '../../../../components/recycle/Slice';
import AButton from '../../../../components/recycle/element/button/AButton';
import TapChildren from '../../../../components/details/TapChidren';

import { media } from '../../../../styles/media';
import { addPageLayoutProps } from '../../../../components/details/ElementData';
import useConfirm from '../../../../hooks/useComfirm';

const ItemForm = dynamic(() => import('../../../../components/recycle/ItemForm'));
const SortingResultComponent = dynamic(() => import('../../../../components/recycle/submitSuccess/SortingResultComponent'));

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleItem, deleteItemDone, deleteItemError } = useSelector((state: rootReducerType) => state.post);
  const { id } = router.query;
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const { title, subTitle } = addPageLayoutProps;

  useEffect(() => {
    setHydrated(true);
  }, []);

  const transferTypes = useCallback(() => {
    return t.PATCH_ITEM_REQUEST;
  }, []);

  const startModify = useCallback(() => {
    setIsModifyMode(true);
  }, []);

  const deleteItem = () => {
    dispatch({
      type: t.DELETE_ITEM_REQUEST,
      data: { clothId: id },
    });
  };

  const cencelDelete = () => {
    console.log('취소하였습니다.');
  };

  const deleteConfirm = useConfirm('정말 의류를 삭제하시겠습니까?', deleteItem, cencelDelete);

  let measureObject = null;
  let measureValue: [string, number][] = [['name', 1]];

  if (singleItem !== null) {
    const { Outer, Top, Pant, Shirt, Shoe, Muffler } = singleItem;
    measureObject = { Outer, Top, Pant, Shirt, Shoe, Muffler };
    Object.values(measureObject).forEach(value => {
      if (value) {
        const { id, createdAt, updatedAt, ClothId, ...data2 } = value;
        measureValue = Object.entries(data2);
      }
    });
  }

  if (!hydrated) {
    return null;
  }

  return (
    <PageLayout>
      {deleteItemDone ? <SortingResultComponent sort='deleteItem' id={Number(id)} /> : null}
      {deleteItemError ? <SortingResultComponent sort='deleteItemFailure' id={Number(id)} /> : null}
      {!deleteItemDone && !deleteItemError && !isModifyMode ? (
        <PageMainLayout istitle={false}>
          <HandleContainer>
            <CustomBread separator='>'>
              <Breadcrumb.Item>
                <Link href='/closet/overview'>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href='/closet/store'>Store</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Details</Breadcrumb.Item>
            </CustomBread>
            <ButtonContainer>
              <AButton color='black' disabled={false} onClick={startModify} dest='수정' />
              <AButton color='' disabled={false} dest='삭제' onClick={deleteConfirm} />
            </ButtonContainer>
          </HandleContainer>

          <SliceContainer>
            <SliceBox>
              <Slice src={singleItem && singleItem.Images} />
            </SliceBox>
            <DataContainer>
              <Categori>{singleItem && singleItem.categori}</Categori>
              <ProductName>{singleItem && singleItem.productName}</ProductName>
              <RateBox>
                <CRate disabled defaultValue={singleItem ? singleItem.preference : 1} />
                <span>{singleItem ? singleItem.preference : 1}</span>
              </RateBox>
              <Descriptions>{singleItem && singleItem.description}</Descriptions>
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
                              <span>{singleItem && singleItem.price.toLocaleString('ko-KR')}</span>
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
                                  <TapChildren name={v[0].toUpperCase()} unit='cm'>
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
            </DataContainer>
          </SliceContainer>
          <ButtonBottomContainer>
            <AButton color='black' disabled={false} onClick={startModify} dest='수정' />
            <AButton color='' disabled={false} dest='삭제' onClick={deleteConfirm} />
          </ButtonBottomContainer>
        </PageMainLayout>
      ) : null}
      {!deleteItemDone && !deleteItemError && isModifyMode ? (
        <ItemForm title={title} subTitle={subTitle} type='details' itemId={Number(id)} resultNumber={Number(id)} Submit={transferTypes} setState={setIsModifyMode} />
      ) : null}
    </PageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.LOAD_ITEM_REQUEST,
    data: { clothId: context.params?.id },
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  return {
    props: {},
  };
});

export default addHead(Details, 'closet', '이 페이지는 의류 상세페이지이며, 수정이나 삭제를 할 수 있습니다');

const HandleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;

const CustomBread = styled(Breadcrumb)`
  margin-bottom: 30px;
  .ant-breadcrumb-link {
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};

    > a {
      font-family: ${({ theme }) => theme.font.Efont};
      font-weight: ${({ theme }) => theme.fontWeight.Light};
    }
  }
`;

const ButtonContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;

  ${media.tablet} {
    display: flex;
  }
`;

const ButtonBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  float: right;
  margin-top: 20px;

  ${media.tablet} {
    display: none;
  }
`;

const SliceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 600px;
  gap: 50px;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const SliceBox = styled.div`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 20px;

  ${media.tablet} {
    max-width: 50%;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Categori = styled.p`
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 15px;
`;

const ProductName = styled.h1`
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: clamp(20px, 35px, 50px);
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 15px;
  width: 100%;
`;

const RateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

const CRate = styled(Rate)`
  .ant-rate-star-second {
    svg {
      font-size: 15px;
    }
  }
`;

const Descriptions = styled.p`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-size: clamp(10px, 16px, 20px);
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 20px;
`;

const TapContainer = styled.div`
  width: 100%;
  height: auto;
`;

const CTaps = styled(Tabs)``;

const ColorCircle = styled.div<{ data: string | number | null }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ data }) => data};
`;
