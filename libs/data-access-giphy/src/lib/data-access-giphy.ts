export function dataAccessGiphy(): string {
  return 'data-access-giphy';
}

export {default as giphies, searchGiphiesStart, searchGiphiesDone, selectGiphies, name} from './giphy-slice'
export {searchGiphyEffect} from './giphy-effects'
