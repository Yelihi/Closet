import React from 'react';
import styled from 'styled-components';

interface IntersectionProps {
  marginBottom?: number;
}

const Intersection = (props: IntersectionProps) => {
  return <Inter {...props}></Inter>;
};

export default Intersection;

export const Inter = styled.div<IntersectionProps>`
  grid-area: inter;
  width: 100%;
  height: 1px;
  background-color: rgba(30, 40, 51, 0.0671438);
  margin-bottom: ${props => props.marginBottom && `${props.marginBottom}rem`};
`;
