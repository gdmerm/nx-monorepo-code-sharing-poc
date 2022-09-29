import {  useSelector } from 'react-redux';
import { GiphyItem, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js'

export function GiphyList() {
  const giphies = useSelector(selectGiphies)

  return (
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
  )
}
