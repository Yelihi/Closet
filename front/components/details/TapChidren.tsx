import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  children: ReactNode;
  unit: 'cm' | 'mm' | '₩' | '색상' | '월';
};

const TapChildren = ({ name, children, unit }: Props) => {
  return (
    <ChildrenBox>
      <ChildrenName>{name}</ChildrenName>
      <DataBox>
        <ChildrenData>{children}</ChildrenData>
        {unit !== '색상' && <ChildrenUnit>{`(${unit})`}</ChildrenUnit>}
      </DataBox>
    </ChildrenBox>
  );
};

export default TapChildren;

const ChildrenBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.hoverGrey};
`;

const ChildrenName = styled.span`
  display: flex;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 15px;
  width: 100%;
`;

const DataBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 5px;
`;

const ChildrenData = styled(ChildrenName)`
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  width: auto;
`;

const ChildrenUnit = styled(ChildrenName)`
  color: ${({ theme }) => theme.colors.middleGrey};
  width: auto;
`;
