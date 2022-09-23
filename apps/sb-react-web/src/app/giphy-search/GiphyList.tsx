import { useDispatch, useSelector } from 'react-redux';
import { searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { useEffect } from 'react';
import '../../../../../libs/sb-ui-components/src/lib/custom-GifyItem.js'

interface GifySearchItem {
  url: string,
  slug?: string,
  id?: string,
  images?: any
}

export function GiphyList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(searchGiphiesStart())
  }, [])

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
        {giphies.map((gify: GifySearchItem) => {
          return (
            // <div key={gify.id} style={{flex: 1}}>
            //   <img src={gify.images.original.url} />
            // </div>
            <gify-item
              key={gify.id}
              data-uri={gify.images.original.url}
              data-width={gify.images.original.width}
              data-height={gify.images.original.height}
            />
          )
        })}
      </section>
    </>
  )
}
