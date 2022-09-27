import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {loadCategoriesEpic, categories} from '@betsson-sportsbook-monorepo/data-access-categories';
import {searchGiphyEffect, giphies} from '@betsson-sportsbook-monorepo/data-access-giphy';

export const rootReducer = combineReducers({
  categories,
  giphies,
})

export const rootEpic = combineEpics(loadCategoriesEpic, searchGiphyEffect)
