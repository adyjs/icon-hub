import {takeLatest , put , call} from 'redux-saga/effects';

// search actions
import * as actionTypes from '../actions/';

// APIs
import iconFinderApi from '../../config.js';

// axios
import axios from 'axios';


export default function *watchSearchAction(){
    yield takeLatest( actionTypes.FETCH_SEARCH_START , pending);
};

function *pending(payload){
    yield put({type: actionTypes.FETCH_SEARCH_PENDING});
    yield call(fetchSearchData , payload);
};

function startAxiosGet(payload){
    const url = iconFinderApi.searchResource;
    return axios.post(url , {
        "identifier" : payload.searchStr
    });
};

function *fetchSearchData(payload){
    try{
        const response = yield startAxiosGet(payload)
        if(response){
            yield put({
                type:actionTypes.FETCH_SEARCH_SUCCESS,
                searchIcons: response.data.icons
            })
        }
    }
    catch(e){
        yield put({
            type: actionTypes.FETCH_SEARCH_FAIL,
            searchIcons: []
        })
    }
}