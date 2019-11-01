import {takeLatest , put} from "redux-saga/effects";
import axios from 'axios';

// actions 
import * as actionTypes from '../actions/';
// APIs
import iconFinderApi from '../../config.js';


// get catesgories items in drop curtain of drawer
const cates = iconFinderApi.categories;
const getCateItemsUrl = `${iconFinderApi.baseUrl}/${cates.endPoint}?\
client_id=${iconFinderApi.client_id}&\
client_secret=${iconFinderApi.client_secret}&\
count=${cates.count}`


export default function *watchFetchCatesAction(){
    yield takeLatest(actionTypes.FETCH_CATEGORIES_START , fetchCatesData);
}

const header = {
    'Content-Type': 'application/json',
    'Content-Disposition': 'attachment'
}

function startAxiosGet(apiUrl){
    return axios.get(apiUrl , {header});
}

function *fetchCatesData(){
    try{
        const response = yield startAxiosGet(getCateItemsUrl);
        if(response){
            yield put({type: actionTypes.FETCH_CATEGORIES_SUCCESS , data: response.data.categories})
        }
    }
    catch(e){
        yield put({type : actionTypes.FETCH_CATEGORIES_FAIL})
    }
}

