import { useDispatch, useSelector } from 'react-redux';
import { GiphyItem, searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { useState } from 'react';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js'

export function GiphySearch() {
  const dispatch = useDispatch()
  const [isEmpty, setEmpty] = useState(true)
  const giphies = useSelector(selectGiphies)

  return (
    <div>
      <input className='input-field' onKeyUp={handleInput} />
      {!isEmpty && (
        <section className="gify-item_container">
          {giphies.map((gify: GiphyItem) => {
            return (
              <gify-item
                key={gify.id}
                // @ts-ignore
                imageurl={gify.images.fixed_height_small.url}
              />
            )
          })}
        </section>
      )}
    </div>
  );

  function handleInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.target as HTMLInputElement).value.length === 0) {
      return setEmpty(true)
    }
    setEmpty(false)
    dispatch(searchGiphiesStart((e.target as HTMLInputElement).value))
  }
}

export default GiphySearch;
