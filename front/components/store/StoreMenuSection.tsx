import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Segmented, Dropdown, Button, MenuProps } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { rootReducerType } from '../../reducers/types';
import { selectStoreCategori } from '../../reducers/post';
import { segmentItems } from './data/TableData';
import { SWR } from '../../util/SWR/API';

type StoreMenuSectionProps = {
  windowWidth: 'desktop' | 'phone';
  segment?: string | number;
  setSegment?: Dispatch<SetStateAction<string | number>>;
};

const StoreMenuSection = ({ windowWidth, segment, setSegment }: StoreMenuSectionProps) => {
  const dispatch = useDispatch();
  const { storeCategori } = useSelector((state: rootReducerType) => state.post);

  const { setSize } = SWR.getInfiniteItems(storeCategori, windowWidth);

  const handleCategori: MenuProps['onClick'] = e => {
    dispatch(selectStoreCategori(e.key));
    setSize(1);
  };

  return (
    <MenuSection>
      <DropdownBox data-testid='categoriSelect'>
        <Dropdown menu={{ items: segmentItems, onClick: handleCategori }}>
          <CButton>
            <IoFilterCircleOutline className='icon' />
            Categori
          </CButton>
        </Dropdown>
        <CategoriSpan data-testid='categoriLabel'>분류 : {storeCategori}</CategoriSpan>
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
  );
};

export default StoreMenuSection;

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
