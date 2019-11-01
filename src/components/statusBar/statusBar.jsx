import React, { Component } from 'react';
import '../../css/statusBar.css';

// react-redux
import {connect} from 'react-redux';

// status actions
import * as actionTypes from '../../store/actions/';

class StatusBar extends Component {

    state = {
        dummy:'',
        catesPath_1: null,
        catesPath_2: null,
        searchPath_1: null,
        searchQueryString: null
    };

    inCatesParser = () => {
        const {path_1 , path_2} = this.props.match.params;
        this.setState({
            catesPath_1: path_1,
            catesPath_2: path_2
        });
        return;
    };

    inSearchParser = (path_1 , searchQueryString) => {
        this.setState({
            searchPath_1: path_1,
            searchQueryString
        })
        return;
    };

    componentDidMount(){
        /* for skip did mount life-cycle stage */
        this.setState({
            dummy: 'initial'
        })
        return;
    };
    
    componentDidUpdate(){
        /* https://baseUrl/path_1/catesPath_2 */
        if(this.props.match.params.path_1 === 'categories' &&
           this.props.match.params.path_2 !== this.state.catesPath_2){
            this.inCatesParser();
            return;
        };

        if(this.props.match.params.path_1 === 'search'){
            const {path_1} = this.props.match.params;
            const searchQueryString = this.props.location.search.substring(3);
            if(searchQueryString !== this.state.searchQueryString){
                this.inSearchParser(path_1 , searchQueryString);
            }
            return;
        }


    };

    statusRenderHandler = () => {
        switch(this.props.match.params.path_1){
            case('categories'):{
                const {catesPath_1 , catesPath_2} = this.state;
                return `${catesPath_1} : ${catesPath_2}`;

            };
            case('search'):{
                const {searchPath_1 , searchQueryString} = this.state;
                return `${searchPath_1} : ${searchQueryString}`
            };
            default:{
                return null;
            };
        };
    };




    backgroundPickerPalette = () => {
        const {catesIcons , searchIcons} = this.props;
        switch(this.props.match.params.path_1){
            case('categories'):{
                if(catesIcons.length === 0){
                    return null
                };
                return (
                    <div className="item-background-option">
                        <span 
                            onClick={this.props.bgOptionWhite}
                            id="bg-option-white" 
                            className="background-option">
                        </span>
                        <span 
                            onClick={this.props.bgOptionTransparent}
                            id="bg-option-transparent" 
                            className="background-option">
                        </span>
                        <span 
                            onClick={this.props.bgOptionBlack}
                            id="bg-option-black" 
                            className="background-option">
                        </span>
                    </div>
                )
            };
            case('search'):{
                if(searchIcons.length === 0){
                    return null
                };
                return (
                    <div className="item-background-option">
                        <span 
                            onClick={this.props.bgOptionWhite}
                            id="bg-option-white" 
                            className="background-option">
                        </span>
                        <span 
                            onClick={this.props.bgOptionTransparent}
                            id="bg-option-transparent" 
                            className="background-option">
                        </span>
                        <span 
                            onClick={this.props.bgOptionBlack}
                            id="bg-option-black" 
                            className="background-option">
                        </span>
                    </div>
                )
            };
            default:{
                return null;
            };
        };
    };



    render() { 
        return (
            <section className="status-bar" >
                <span className="status-content" >
                    {this.statusRenderHandler()}
                </span>
                {this.backgroundPickerPalette()}
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        catesIcons: state.drawerReducer.catesIcons,
        searchIcons: state.searchReducer.searchIcons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        bgOptionWhite: () => {dispatch({type: actionTypes.BACKGROUND_OPTION_WHITE})},
        bgOptionTransparent: () => {dispatch({type: actionTypes.BACKGROUND_OPTION_TRANSPARENT})},
        bgOptionBlack: () => {dispatch({type: actionTypes.BACKGROUND_OPTION_BLACK})}
    };
};


export default connect(mapStateToProps , mapDispatchToProps)(StatusBar);