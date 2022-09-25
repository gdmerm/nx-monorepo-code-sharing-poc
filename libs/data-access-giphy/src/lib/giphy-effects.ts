import { debounceTime, distinctUntilChanged, filter, mergeMap, Observable, switchMap } from 'rxjs';
import { Action, AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { searchGiphiesDone, searchGiphiesStart } from './giphy-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';

const API_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = '8Bgk5JnkH20K6BJE4wvH2JwbsrBJL0Pv'

export const searchGiphyEffect = (actions$: Observable<Action>) => {
  return actions$.pipe(
    ofType(searchGiphiesStart),
    filter((action: any) => action.payload.length >= 3),
    distinctUntilChanged(),
    debounceTime(150),
    switchMap((action) => Axios.get(`${API_URL}/search?api_key=${API_KEY}&q=${action.payload}&limit=25&offset=0&rating=g&lang=en`).pipe(
      mergeMap((res: AxiosResponse) => ([searchGiphiesDone(res.data.data)]))
    ))
  )
}
