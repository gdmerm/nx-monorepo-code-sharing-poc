import { Action, combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { filter, map, Observable } from 'rxjs';
import {loadCategoriesEpic} from '@betsson-sportsbook-monorepo/data-access-categories';
import {categories} from '@betsson-sportsbook-monorepo/data-access-categories';

const pingEpic = (action$: Observable<Action>) => action$.pipe(
  filter(action => action.type === 'PING'),
  map(() => ({ type: 'PONG' }))
);

export const rootReducer = combineReducers({
  categories,
})

export const rootEpic = combineEpics(pingEpic, loadCategoriesEpic)
