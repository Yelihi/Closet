import styled from 'styled-components';

import useLottieAnimation from '../../hooks/useLottieAnimation';

import { useLottiePropsByState } from './Data';

type RenderBySearchStateProps = {
  state: keyof typeof useLottiePropsByState;
};

const RenderBySearchState = ({ state }: RenderBySearchStateProps) => {
  const View = useLottieAnimation(useLottiePropsByState[state].options, useLottiePropsByState[state].style);

  return (
    <StateContainer>
      {View}
      <p>{useLottiePropsByState[state].Notify}</p>
    </StateContainer>
  );
};

export default RenderBySearchState;

const ResultsListContainer = styled.section`
  padding: 2rem;
  width: 100%;
  height: auto;

  > h4 {
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.symbol};
  }
`;

const StateContainer = styled(ResultsListContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;
