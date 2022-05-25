import { catchError, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { fetchCategoriesDone, fetchCategoriesStart } from './categories-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';

const CATEGORIES_API_LOCATOR = '/api/sb/v1/widgets/categories/v1?includeBadge=false';
const headers = {
  'brandid': '',
  'x-obg-channel': 'Web',
  'x-obg-device': 'Desktop',
  'marketcode': 'en',
  'x-obg-country-code': 'GR'
}

export const loadCategoriesEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(fetchCategoriesStart),
  switchMap(() => Axios.get(`http://localhost:3001${CATEGORIES_API_LOCATOR}`, { headers }).pipe(
    mergeMap((res: AxiosResponse<any>) => ([fetchCategoriesDone(res.data.data.items)])),
    catchError(() => of({ type: '@categories/fetch/http-error' }))
  ))
)
