import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SbUiComponentsProps {}

const StyledSbUiComponents = styled.div`
  color: pink;
`;

export function SbUiComponents(props: SbUiComponentsProps) {
  return (
    <StyledSbUiComponents>
      <h1>Welcome to SbUiComponents!</h1>
    </StyledSbUiComponents>
  );
}


export {RNHighScores} from './RNHighScores'
export default SbUiComponents;
