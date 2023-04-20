import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';
import { AiOutlineDatabase } from 'react-icons/ai';

import PageLayout from '../recycle/layout/PageLayout';
import PageMainLayout from '../recycle/layout/PageMainLayout';
import ProcessingDataCard from '../recycle/ProcessingDataCard';
import ATable from './ATable';
import CardBoard from './CardBoard';

import { StoreHeader } from './TableData';

interface SKeletonProps {
  children: React.ReactElement;
  loadItemsLoading: boolean;
  deleteItemLoding: boolean;
  windowWidth: 'desktop' | 'phone';
}

const SkeletonStore = ({ children, loadItemsLoading, deleteItemLoding, windowWidth }: SKeletonProps) => {
  if (loadItemsLoading || deleteItemLoding) {
    return (
      <>
        <PageLayout>
          <PageMainLayout istitle={false} skeleton={true}>
            <HandleContainer>
              <CustomBread></CustomBread>
            </HandleContainer>
            <TitleSection>
              <dl>
                <Title></Title>
                <SubTitle></SubTitle>
              </dl>
            </TitleSection>
            <CardSection>
              <ProcessingDataCard Icon={<AiOutlineDatabase className='icon' />} DataTitle='skeleton' isLoading={true} />
              <ProcessingDataCard Icon={<AiOutlineDatabase className='icon' />} DataTitle='skeleton' isLoading={true} />
              <ProcessingDataCard Icon={<AiOutlineDatabase className='icon' />} DataTitle='skeleton' isLoading={true} />
            </CardSection>
            <AddSection>
              <DictionaryBox>
                <dt></dt>
                <dd></dd>
              </DictionaryBox>
              <AddButton>
                <div></div>
              </AddButton>
            </AddSection>
            <MenuSection></MenuSection>
            <ItemsStoreSection>
              {windowWidth === 'desktop' ? <ATable headData={StoreHeader} itemsData={[]} isDelete={true} isLoading={true} /> : null}
              {windowWidth === 'phone' ? <CardBoard itemData={[]} isLoading={true} isItemsLoading={true} /> : null}
            </ItemsStoreSection>
            <Space></Space>
            <div></div>
          </PageMainLayout>
        </PageLayout>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default SkeletonStore;

const Animation = styled.div``;

const HandleContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;

const CustomBread = styled.div`
  margin-bottom: 30px;
  width: 20%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  > dl {
    width: 100%;
  }
`;

const Title = styled.dt`
  width: 50%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  margin-bottom: 20px;
`;

const SubTitle = styled.dd`
  display: block;
  width: 70%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};

  margin-bottom: 10px;
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
  width: 100%;
  > dt {
    width: 10%;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
    margin-bottom: 8px;
  }

  > dd {
    width: 20%;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  gap: 5px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border: none;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > div {
    display: none;
  }

  ${media.middlePhone} {
    > div {
      display: block;
    }
  }
`;

const MenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ItemsStoreSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

  > div {
    width: 100px;
    height: 50px;
    background-color: white;
  }
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
