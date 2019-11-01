import {takeLatest , put , call} from 'redux-saga/effects';

// APIs
import iconFinderApi from '../../config.js';

// drawer actions
import * as actionTypes from '../../store/actions/';
import axios from 'axios';

// iconSets resource url
const iconSets = iconFinderApi.iconSets;
const getIconSetsUrl = `${iconFinderApi.baseUrl}${iconSets.endPoint}`;
const postPath = `${iconSets.postPath}`;
const queryString = `client_id=${iconFinderApi.client_id}&\
client_secret=${iconFinderApi.client_secret}&\
count=${iconSets.count}&\
premium=${iconSets.premium}&\
vector=${iconSets.vector}&\
license=${iconSets.license}`



export default function *watchFetchCatesIconSetsAction(){
    yield takeLatest(actionTypes.FETCH_CATES_ICON_SETS_START , pending);
    
}

function *pending(payload){
    yield put({type: actionTypes.FETCH_CATES_ICON_SETS_PENDING});
    yield call(fetchCatesIconSets , payload)
};

function startAxiosGet(payload){
    const {catesIdentifier} = payload;
    const url = `${getIconSetsUrl}/${catesIdentifier}${postPath}?${queryString}`;
    return axios.get(url);
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


