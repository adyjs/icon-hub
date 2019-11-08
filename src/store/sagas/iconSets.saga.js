import {takeLatest , put , call} from 'redux-saga/effects';
import axios from 'axios';

// drawer actions
import * as actionTypes from '../../store/actions/';

// front-end config
import iconFinderApi from '../../config.js';


export default function *watchFetchCatesIconSetsAction(){
    yield takeLatest(actionTypes.FETCH_CATES_ICON_SETS_START , pending);
}

function *pending(payload){
    yield put({type: actionTypes.FETCH_CATES_ICON_SETS_PENDING});
    yield call(fetchCatesIconSets , payload)
};

function startAxiosGet(payload){
    const {catesIdentifier} = payload;
    const url = iconFinderApi.catesResource;
    return axios.post( url , {
        "identifier" : catesIdentifier
    })
};

function *fetchCatesIconSets(payload){
    const {catesIdentifier} = payload;
    try{
        const response = yield startAxiosGet(payload);
        if(response){
            yield put({
                type: actionTypes.FETCH_CATES_ICON_SETS_SUCCESS, 
                catesIcons: response.data.icons,
                catesIdentifier
            })
        }
    }
    catch(e){
        yield put({
            type: actionTypes.FETCH_CATES_ICON_SETS_FAIL,
            catesIcons: [],
            catesIdentifier
        })
    }
}


