import React, { Component } from 'react';
import '../../css/dropCurtain.css';

// components
import CatesItems from './catesItems.jsx';
import CurtainLoadingSvg from './curtainLoadingSvg.jsx'

// react-redux
import {connect} from 'react-redux';

class DropCurtain extends Component {

    catesItemsRender = (items) => {
        if(Array.isArray(items) && items.length === 0){
            return <CurtainLoadingSvg />;
        }
        else{
            return items.map( (item , index) => {
                return (
                    <CatesItems 
                        key={index}
                        itemName={item.name}
                        identifier={item.identifier}
                    />
                )
            })
        };
    };


    dropCurtainHandler = () => {
        const {openTab , testItems , catesItems} = this.props;

        switch(openTab){
            case('categories'):
                return (
                    <div className="drawer-screen"> 
                        <ul className="drawer-screen-ul">
                            {this.catesItemsRender(catesItems)}
                        </ul>
                    </div>
                );
            case('test'):
                return (
                    <div className="drawer-screen"> 
                        <ul className="drawer-screen-ul">
                            {this.catesItemsRender(testItems)}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    render() { 
        
        return (
            <React.Fragment>
                {this.dropCurtainHandler()}
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openTab: state.drawerReducer.openTab,
        catesItems: state.drawerReducer.catesItems,
        testItems: state.drawerReducer.testItems,
    }
};

export default connect(mapStateToProps , null)(DropCurtain);