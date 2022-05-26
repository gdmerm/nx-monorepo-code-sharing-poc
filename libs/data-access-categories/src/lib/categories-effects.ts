import { catchError, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { fetchCategoriesDone, fetchCategoriesStart } from './categories-slice';
import { Axios } from 'axios-observable';
import { AxiosResponse } from 'axios';
import Config from 'react-native-config';

const CATEGORIES_API_LOCATOR = '/api/sb/v1/widgets/categories/v1?includeBadge=false';
const headers = {
  'brandid': '',
  'x-obg-channel': 'Web',
  'x-obg-device': 'Desktop',
  'marketcode': 'en',
  'x-obg-country-code': 'GR'
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let API_URL = process.env['NX_API_URL'] || Config['API_URL']
if (!API_URL) {
  API_URL = ''
}

export const loadCategoriesEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(fetchCategoriesStart),
  switchMap(() => Axios.get(`${API_URL}${CATEGORIES_API_LOCATOR}`, { headers }).pipe(
    mergeMap((res: AxiosResponse<any>) => ([fetchCategoriesDone(res.data.data.items)])),
    catchError(() => of({ type: '@categories/fetch/http-error' }))
  ))
)
