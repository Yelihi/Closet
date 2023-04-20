import Image from 'next/image';
import Router from 'next/router';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Empty } from 'antd';
import { StoreHeaderType, ItemsArray } from './TableData';

import { backUrl, base64URL } from '../../config/config';

import { FaTrashRestoreAlt } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';

type TableProps = {
  headData: StoreHeaderType[];
  itemsData: ItemsArray[] | undefined;
  isDelete?: boolean;
  onSubmit?: (id: number) => () => void;
  isLoading?: boolean; // true 일때 로딩중
};

const SkeletonArray = Array(9)
  .fill(0)
  .map((_, idx) => idx);

const ATable = ({ headData, itemsData = [], isDelete, onSubmit, isLoading }: TableProps) => {
  const headerKey = headData.map(v => v.value);
  const moveToDetailsPage = useCallback(
    (id: number) => () => {
      Router.push(`/closet/details/${id}`);
    },
    []
  );

  if (isLoading) {
    return (
      <>
        <Table>
          <Thead>
            <tr>
              {headData.map((header, idx) => {
                return (
                  <Th key={header.text} index={header.text}>
                    <SKDiv></SKDiv>
                  </Th>
                );
              })}
            </tr>
          </Thead>
          <tbody>
            {SkeletonArray.map((data, index) => {
              return (
                <Tr key={index}>
                  {headerKey.map(headKey => {
                    return (
                      <Td key={headKey + index}>
                        {headKey === 'productName' ? (
                          <SKImageBox>
                            <div></div>
                            <span></span>
                          </SKImageBox>
                        ) : headKey === 'price' ? (
                          <SKDiv></SKDiv>
                        ) : headKey === 'etc' ? (
                          <EtcBox>
                            <SKETC></SKETC>
                            <SKETC></SKETC>
                          </EtcBox>
                        ) : (
                          <SKDiv></SKDiv>
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }

  if (itemsData.length == 0) {
    return (
      <>
        <Table>
          <Thead>
            <tr>
              {headData.map((header, idx) => {
                return (
                  <Th key={header.text} index={header.text}>
                    {header.text}
                  </Th>
                );
              })}
            </tr>
          </Thead>
        </Table>
        <EmptyDiv>
          <Empty />
        </EmptyDiv>
      </>
    );
  }

  return (
    <Table>
      <Thead>
        <tr>
          {headData.map((header, idx) => {
            return (
              <Th key={header.text} index={header.text}>
                {header.text}
              </Th>
            );
          })}
        </tr>
      </Thead>
      <tbody>
        {itemsData.map((data, index) => {
          return (
            <Tr key={index}>
              {headerKey.map(headKey => {
                return (
                  <Td key={headKey + index}>
                    {headKey === 'productName' && data.Images.length > 0 ? (
                      <ImageBox>
                        <CImage src={`${backUrl}/${data.Images[0].src}`} alt={data[headKey]} width={100} height={100} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
                        {data[headKey]}
                      </ImageBox>
                    ) : headKey === 'price' ? (
                      data[headKey].toLocaleString('ko-KR')
                    ) : headKey === 'etc' && isDelete && onSubmit ? (
                      <EtcBox>
                        <ETC onClick={moveToDetailsPage(data.id)}>
                          <BiDetail className='icon' /> 상세보기
                        </ETC>
                        <ETC onClick={() => (window.confirm('삭제하시겠습니까?') ? onSubmit(data.id)() : () => console.log('취소했씁니다'))}>
                          <FaTrashRestoreAlt className='icon' /> 삭제하기
                        </ETC>
                      </EtcBox>
                    ) : (
                      headKey !== 'etc' && data[headKey]
                    )}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ATable;

const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 10px;
`;

const Thead = styled.thead``;

const Th = styled.th<{ index: string }>`
  text-align: start;
  padding: 15px;
  font-family: ${({ theme }) => theme.font.Efont};
  color: ${({ theme }) => theme.colors.middleGrey};

  ${props =>
    props.index === 'Purchase Day'
      ? css`
          width: 10%;
        `
      : props.index === 'Item Categori'
      ? css`
          width: 10%;
        `
      : props.index === 'Cost'
      ? css`
          width: 15%;
        `
      : props.index === 'etc'
      ? css`
          width: 25%;
        `
      : css`
          width: 30%;
        `}
`;

const SKTh = styled(Th)`
  height: 12px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const Tr = styled.tr`
  transition: box-shadow 0.1s ease-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const Td = styled.td`
  text-align: start;
  padding: 15px;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.mainGrey};
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.deepGrey};
`;

const SKDiv = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const SKImageBox = styled(ImageBox)`
  width: 100%;
  height: 30px;

  > div {
    width: 20%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }

  > span {
    display: block;
    width: 50%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }
`;

const CImage = styled(Image)`
  width: 30%;
  height: auto;
  border-radius: 5px;
`;

const EtcBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
`;

const ETC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.deepGrey};
  padding: 7px;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 10px;
  transition: box-shadow 0.1s ease-out;
  cursor: pointer;

  .icon {
    width: 17px;
    height: 17px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const SKETC = styled(ETC)`
  width: 40%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border: none;
`;

export const EmptyDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;
