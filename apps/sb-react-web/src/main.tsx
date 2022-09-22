import { StrictMode } from 'react';
import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootEpic, rootReducer } from './app/store/root';
import { createEpicMiddleware } from 'redux-observable';
import { AppRegistry } from 'react-native';
import {worker} from './mocks/browser';

worker.start()
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
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)

AppRegistry.registerComponent('main', () => AppWithRedux);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});

