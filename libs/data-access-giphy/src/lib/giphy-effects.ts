import { debounceTime, distinctUntilChanged, filter, mergeMap, Observable, switchMap, tap } from 'rxjs';
import { Action, AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { searchGiphiesDone, searchGiphiesStart } from './giphy-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';
import { Router } from '@angular/router';

const API_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = '8Bgk5JnkH20K6BJE4wvH2JwbsrBJL0Pv'
const LIMIT = 25

export const searchGiphyEffect = (actions$: Observable<Action>, router: Router) => {
  return actions$.pipe(
    tap(() => console.log(router)),
    ofType(searchGiphiesStart),
    filter((action: any) => action.payload.length > 2),
    distinctUntilChanged(),
    debounceTime(150),
    switchMap((action) => Axios.get(`${API_URL}/search?api_key=${API_KEY}&q=${action.payload}&limit=${LIMIT}&offset=0&rating=g&lang=en`).pipe(
      mergeMap((res: AxiosResponse) => ([searchGiphiesDone(res.data.data)]))
    ))
  )
}
