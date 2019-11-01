import React, { Component } from 'react';
import '../../css/main.css';

// react-redux
import {connect} from 'react-redux';

// drawer actions 
import * as actionTypes from '../../store/actions/';

class Main extends Component {
    render() { 
        console.log(this.props);
        return (
            <div
                onClick={this.props.resumeCurtain} 
                className="main">
                <div className="main-inner">
                    <ul>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                        <li><img  alt="test"></img></li>
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resumeCurtain: () => {dispatch({type: actionTypes.CURTAIN_RESUME_MAIN_CLICK})}
    }
};

export default connect(mapStateToProps , mapDispatchToProps)(Main);