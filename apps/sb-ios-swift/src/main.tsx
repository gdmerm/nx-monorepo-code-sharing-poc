import App from './app/app';
import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootEpic, rootReducer } from './app/store/root';
import { createEpicMiddleware } from 'redux-observable';
import { AppRegistry } from 'react-native';

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

const AppWithRedux = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

AppRegistry.registerComponent('RNHighScores', () => AppWithRedux);
// AppRegistry.runApplication('RNHighScores', {
//   rootTag: document.getElementById('root'),
// });


