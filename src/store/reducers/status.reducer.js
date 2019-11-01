import * as actionTypes from '../actions/';

const INITIAL_STATE = {
    bgOption: 'white',
};


const statusReducer = (state = INITIAL_STATE , action) => {
    // console.log(action);
    switch(action.type){
        case(actionTypes.BACKGROUND_OPTION_WHITE):
            return {
                ...state,
                bgOption: 'white'
            };
        case(actionTypes.BACKGROUND_OPTION_BLACK):
            return {
                ...state,
                bgOption: 'black'
            };
        case(actionTypes.BACKGROUND_OPTION_TRANSPARENT):
            return {
                ...state,
                bgOption: 'transparent'
            };
        default:
            return {
                ...state
            };
    }
}

export default statusReducer;