import {takeLatest , put} from "redux-saga/effects";
import axios from 'axios';

// actions 
import * as actionTypes from '../actions/';
// APIs
import iconFinderApi from '../../config.js';


export default function *watchFetchCatesAction(){
    yield takeLatest(actionTypes.FETCH_CATEGORIES_START , fetchCatesData);
}


function startAxiosGet(){
    const url = `${iconFinderApi.categoryItemsResource}`;
    return axios.get(url);
}

function *fetchCatesData(){
    try{
        const response = yield startAxiosGet();
        if(response){
            yield put({
                type: actionTypes.FETCH_CATEGORIES_SUCCESS , 
                data: response.data.categories
            })
        }
    }
    catch(e){
        yield put({type : actionTypes.FETCH_CATEGORIES_FAIL})
    }
}

