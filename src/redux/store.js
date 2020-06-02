import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set up middleware
const middlewares = [logger];

// set up store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);