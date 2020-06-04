import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set up middleware
const middlewares = [];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

// set up store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);