import * as actionTypes from '../actions/';

const INITIAL_STATE = {
    tabs: ['類別'],
    tabsId: ['categories'],
    catesItems: [],
    catesIcons: [],
    openTab: null,
    prevIdentifier: null,
    // start or stop
    iconFetchStatus: 'stop',
};

const drawerReducer = (state = INITIAL_STATE , action) => {
    // console.log(action);
    switch(action.type){
        case(actionTypes.DRAWER_TAB_CLICK):
            return {
                ...state,
                openTab: action.id
            }
        case(actionTypes.FETCH_CATEGORIES_SUCCESS):
            return {
                ...state,
                catesItems : action.data
            }
        case(actionTypes.FETCH_CATEGORIES_FAIL):
            return {
                ...state,
            }
        case(actionTypes.CURTAIN_RESUME_OVERLAY_CLICK):
        case(actionTypes.CURTAIN_RESUME_INNER_ITEM_CLICK):
        case(actionTypes.CURTAIN_RESUME_MAIN_CLICK):
        case(actionTypes.CURTAIN_RESUME_FOOTER_CLICK):
            return {
                ...state,
                openTab: null
            }
        case(actionTypes.FETCH_CATES_ICON_SETS_PENDING):
            return {
                ...state,
                catesIcons: [],
                iconFetchStatus: 'start'
            }
        case(actionTypes.FETCH_CATES_ICON_SETS_SUCCESS):
        case(actionTypes.FETCH_CATES_ICON_SETS_FAIL):
            return {
                ...state,
                catesIcons: action.catesIcons,
                prevIdentifier: action.catesIdentifier,
                iconFetchStatus: 'stop'
            }
        default:
            return {
                ...state
            }
    }
}

export default drawerReducer;