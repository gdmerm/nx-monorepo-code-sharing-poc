export function dataAccessGiphy(): string {
  return 'data-access-giphy';
}

export interface GiphyItem {
  id: string,
  url: string,
  images: {
    original: {
      url: string,
      width: number,
      height: number
    },
    fixed_height_small: {
      url: string,
      width: number,
      height: number
    },
    fixed_height: {
      url: string,
      width: number,
      height: number
    },
    downsized_medium: {
      url: string,
      width: number,
      height: number
    },
  }
}

export {default as giphies, searchGiphiesStart, searchGiphiesDone, selectGiphies, name} from './giphy-slice'
export {searchGiphyEffect} from './giphy-effects'
