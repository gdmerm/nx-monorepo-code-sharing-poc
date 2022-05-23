import { catchError, mergeMap, Observable, of, switchMap } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { fetchCategoriesDone, fetchCategoriesStart } from './categories-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';

const CATEGORIES_API_LOCATOR = '/api/sb/v1/widgets/categories/v1?includeBadge=false';
const headers = new Map();
headers
  .set('brandid', '4bf6590d-0a29-47f5-a705-42b7a04b7878')
  .set('x-obg-channel', 'Web')
  .set('x-obg-device', 'Desktop')
  .set('marketcode', 'en')
  .set('x-obg-country-code', 'GR');

export const loadCategoriesEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(fetchCategoriesStart),
  switchMap(() => Axios.get(`${CATEGORIES_API_LOCATOR}`, { headers: Object.fromEntries(headers) }).pipe(
    mergeMap((res: AxiosResponse<any>) => ([fetchCategoriesDone(res.data.data.items)])),
    catchError(() => of({ type: '@categories/fetch/http-error' }))
  ))
)
