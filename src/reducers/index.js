import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import storeData from './storeData';

const rootReducer = combineReducers({ 
  routing: routerReducer,
  storeData,
});

export default rootReducer;
