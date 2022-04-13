import { render } from '@testing-library/react';

import SbUiComponents from './sb-ui-components';

describe('SbUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SbUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
