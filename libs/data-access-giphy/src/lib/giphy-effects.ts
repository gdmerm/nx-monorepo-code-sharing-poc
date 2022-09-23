import { mergeMap, Observable, switchMap } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { searchGiphiesDone, searchGiphiesStart } from './giphy-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = '8Bgk5JnkH20K6BJE4wvH2JwbsrBJL0Pv'

const SEARCH_API_URL = `${API_URL}/search?api_key=${API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`

export const searchGiphyEffect = (actions$: Observable<Action>) => {
  return actions$.pipe(
    ofType(searchGiphiesStart),
    switchMap(() => Axios.get(SEARCH_API_URL).pipe(
      mergeMap((res: AxiosResponse) => ([searchGiphiesDone(res.data.data)]))
    ))
  )
}
