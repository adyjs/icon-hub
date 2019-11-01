import React, { Component } from 'react';
import '../../css/drawerTab.css';

// drawer actions
import * as actionTypes from '../../store/actions/';

// react-redux
import {connect} from 'react-redux';

class DrawerTab extends Component {


    clickTabHandler = (e) => {
        const id = e.target.getAttribute('id');
        const {openTab} = this.props;
        if(openTab === null || openTab !== id){
            this.props.clickedTab(id);
            return ;
        }
        this.props.clickedTab(null);
    }


    tabsRender = () => {
        const {tabs , tabsId , openTab} = this.props;
        return tabs.map( (tab , index) => {
            let classGroup = `drawer-tab`;
            if(openTab !== null && tabsId[index] === openTab){
                classGroup = `drawer-tab drawer-tab-active`;
            }
            return (
                <li 
                    key={index}
                    onClick={this.clickTabHandler}
                    id={tabsId[index]}
                    className={classGroup}
                >
                    {tab}
                </li>
            );
        })
    }

    render() { 
        return (
            <React.Fragment>
                {this.tabsRender()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openTab: state.drawerReducer.openTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickedTab: (id) => {dispatch({type: actionTypes.DRAWER_TAB_CLICK , id})}
    }
};
 
export default connect(mapStateToProps , mapDispatchToProps)(DrawerTab);