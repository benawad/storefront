import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics';
import rootReducer from './reducers/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

