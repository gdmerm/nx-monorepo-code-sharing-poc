import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {loadCategoriesEpic, categories} from '@betsson-sportsbook-monorepo/data-access-categories';

export const rootReducer = combineReducers({
  categories,
})

export const rootEpic = combineEpics(loadCategoriesEpic)
