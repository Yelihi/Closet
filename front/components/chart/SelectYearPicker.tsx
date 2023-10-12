import React from 'react';
import styled from 'styled-components';

import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/es/date-picker';
import { media } from '../../styles/media';

const SelectYearPicker = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <Section>
      <Subject>Selected Year</Subject>
      <DatePicker onChange={onChange} picker='year' />
    </Section>
  );
};

export default SelectYearPicker;

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1rem;

  ${media.tablet} {
    justify-content: flex-end;
  }
`;

const Subject = styled.div`
  font-size: 15px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
`;
