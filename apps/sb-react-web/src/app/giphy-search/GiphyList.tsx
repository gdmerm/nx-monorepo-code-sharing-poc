import {  useSelector } from 'react-redux';
import { GiphyItem, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js'

interface GifySearchItem {
  url: string,
  slug?: string,
  id?: string,
  images?: any
}

export function GiphyList() {
  const giphies = useSelector(selectGiphies)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html:`
          .gify-item_container {
            display: flex;
            flex-wrap: wrap;
          }
          gify-item img {
            background-size: cover;
            width: 320px !important;
            height: 300px !important;
          }
        `
      }} />
      <section className="gify-item_container">
        {giphies.map((gify: GiphyItem) => {
          return (
            <gify-item
              key={gify.id}
              data-uri={gify.images.fixed_height_small.url}
              data-width={gify.images.fixed_height_small.width}
              data-height={gify.images.fixed_height_small.height}
            />
          )
        })}
      </section>
    </>
  )
}
