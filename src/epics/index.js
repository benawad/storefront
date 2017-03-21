import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

import data from './data';

const fetchDataEpic = action$ =>
  action$.ofType('DATA_REQUESTED')
    .mergeMap(action =>
      Observable.of(data)
        .map(storeData => ({
          type: 'SET_DATA',
          storeData
        }))
    );

export const rootEpic = combineEpics(
  fetchDataEpic,
);
