import React from 'react';
import '../../css/catesItems.css';

// react-router
import {Link} from 'react-router-dom';

// react-redux
import {connect} from 'react-redux';

// drawer actions
import * as actionTypes from '../../store/actions/';

const CatesItems = (props) => {
    const path = `/categories/${props.identifier}`;
    return (
        <li className="drawer-inner-item">
            <Link 
                to={path}
                onClick={props.resumeCurtain}
                className="drawer-anchor"
            >
                {props.itemName}
            </Link>
        </li>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        resumeCurtain: () => {dispatch({type: actionTypes.CURTAIN_RESUME_INNER_ITEM_CLICK})}
    }
}
 
export default connect(null , mapDispatchToProps)(CatesItems);