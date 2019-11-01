
import * as actionTyps from '../actions/';

const INITIAL_STATE = {
    searchIcons: [],
    searchStatus: 'stop'
};

const searchReducer = (state = INITIAL_STATE , action) => {
    // console.log(action)
    switch(action.type){
        case(actionTyps.FETCH_SEARCH_PENDING):
            return {
                ...state,
                searchIcons: [],
                searchStatus: 'start'
            };
        case(actionTyps.FETCH_SEARCH_SUCCESS):
        case(actionTyps.FETCH_SEARCH_FAIL):
            return {
                ...state,
                searchIcons: action.searchIcons,
                searchStatus: 'stop'
            };
        default:
            return{
                ...state
            }
    };
};

export default searchReducer;