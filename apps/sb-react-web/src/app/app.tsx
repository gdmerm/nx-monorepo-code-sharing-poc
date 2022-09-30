import styled from 'styled-components';
import {GiphySearch} from '@betsson-sportsbook-monorepo/sb-ui-components';

/**
 * You can either import the react-native GiphySearch from /libs or the react web specific version from ./giphy-seearch/GiphySearch
 * The react-native version works through react-native-web which aliases all react-native imports to react-native-web
 */

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <GiphySearch />
    </StyledApp>
  );
}

export default App;
