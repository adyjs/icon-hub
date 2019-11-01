import React, { Component } from 'react';
import '../../css/drawer.css';

// components
import DrawerTab from './drawerTab.jsx';

// react-redux
import {connect} from 'react-redux';

// actions
import * as actionTypes from '../../store/actions/';


class Drawer extends Component {

    componentDidMount(){
        this.props.fetchCatesStart();
    };

    componentDidUpdate(){
    };

    render() { 
        return (
            <div className="drawer" >
                <ul className="drawer-tab-bar" >
                    <DrawerTab 
                        tabs={this.props.tabs}
                        tabsId={this.props.tabsId}
                    />          
                </ul>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        tabs : state.drawerReducer.tabs,
        tabsId : state.drawerReducer.tabsId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCatesStart : () => {dispatch({type: actionTypes.FETCH_CATEGORIES_START})}
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(Drawer);