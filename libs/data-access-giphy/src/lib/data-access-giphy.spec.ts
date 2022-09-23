import { dataAccessGiphy } from './data-access-giphy';

describe('dataAccessGiphy', () => {
  it('should work', () => {
    expect(dataAccessGiphy()).toEqual('data-access-giphy');
  });
});
