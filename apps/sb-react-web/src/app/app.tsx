import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { RNHighScores } from '@betsson-sportsbook-monorepo/sb-ui-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <RNHighScores scores={[]} />
      <NxWelcome title="sb-react-web" />
    </StyledApp>
  );
}

export default App;
