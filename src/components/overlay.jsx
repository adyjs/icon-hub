import React from 'react';
import '../css/overlay.css';

// drawer actions
import * as actionTypes from '../store/actions/';

// react-redux
import {connect} from 'react-redux';

const Overlay = (props) => {
    return props.openTab === null? 
            null : (<div onClick={props.resumeCurtain} className="overlay"></div>)

}

const mapStateToProps = (state) => {
    return {
        openTab: state.drawerReducer.openTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resumeCurtain: () => {dispatch({type: actionTypes.CURTAIN_RESUME_OVERLAY_CLICK})}
    };
};
 
export default connect(mapStateToProps , mapDispatchToProps)(Overlay);