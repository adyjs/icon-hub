import {fork} from 'redux-saga/effects'

// sagas
import watchFetchCatesAction from './drawer.saga.js';
import watchFetchCatesIconSetsAction from './iconSets.saga.js';
import watchSearchAction from './search.saga.js';

export default function *rootSaga(){
    yield fork(watchFetchCatesAction);
    yield fork(watchFetchCatesIconSetsAction);
    yield fork(watchSearchAction);
}