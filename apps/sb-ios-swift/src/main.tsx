import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootEpic, rootReducer } from './app/store/root';
import { createEpicMiddleware } from 'redux-observable';
import { AppRegistry } from 'react-native';
import { CategoriesListing } from '@betsson-sportsbook-monorepo/sb-ui-components';

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  // Additional middleware can be passed to this array
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env['NODE_ENV'] !== 'production',
  middleware: (defaultMiddleware) => ([...defaultMiddleware(), epicMiddleware]),
  // Optional Redux store enhancers
  enhancers: [],
});

epicMiddleware.run(rootEpic);

function ReduxComponent() {
 return (
   <Provider store={store}>
     <CategoriesListing></CategoriesListing>
   </Provider>
 )
}

AppRegistry.registerComponent('COM_BETSSON_NET__CategoriesListing', () => ReduxComponent);
