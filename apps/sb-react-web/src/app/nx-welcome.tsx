import { CategoriesListing } from '@betsson-sportsbook-monorepo/sb-ui-components';
import { GiphyList } from './giphy-search/GiphyList';
import { useDispatch } from 'react-redux';
import { searchGiphiesStart } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { useState } from 'react';

export function NxWelcome({ title }: { title: string }) {
  const dispatch = useDispatch()
  const [isEmpty, setEmpty] = useState(true)
  function handleInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.target as HTMLInputElement).value.length === 0) {
      return setEmpty(true)
    }
    setEmpty(false)
    dispatch(searchGiphiesStart((e.target as HTMLInputElement).value))
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html:`
            .input-field {
              font-size: 20px;
              padding: 10px;
              margin: 10px 0;
              width: 100%;
            }
        `
      }} />
      <div>
        <input className='input-field' onKeyUp={handleInput} />
        {!isEmpty && <GiphyList />}
      </div>
    </>
  );
}

export default NxWelcome;
