import {takeLatest , put , call} from 'redux-saga/effects';

// search actions
import * as actionTypes from '../actions/';

// APIs
import iconFinderApi from '../../config.js';

// axios
import axios from 'axios';

const search = iconFinderApi.search;
const searchUrlApi = `${iconFinderApi.baseUrl}${search.endPoint}?\
client_id=${iconFinderApi.client_id}&\
client_secret=${iconFinderApi.client_secret}&\
count=${search.count}&\
premium=${search.premium}&\
license=${search.license}`


export default function *watchSearchAction(){
    yield takeLatest( actionTypes.FETCH_SEARCH_START , pending);
};

function *pending(payload){
    yield put({type: actionTypes.FETCH_SEARCH_PENDING});
    yield call(fetchSearchData , payload);
};

function startAxiosGet(payload){
    const url = `${searchUrlApi}&query=${payload.searchStr}`;
    return axios.get(url);
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