import React, { Component } from 'react';
import '../../css/searchMain.css';

// no preview image
import noPreviewImage from '../../imgs/no_preview_images.jpg';

// react-redux
import {connect} from 'react-redux';

// search 
import * as actionTypes from '../../store/actions/';

// loading-svg
import MainLoadingSVG from './mainLoadingSVG.jsx';

class SearchMain extends Component {
    
    state = {
        dummy: ''
    }

    

    previewSizeHandler = (icon) => {
        const sizeArr = icon.raster_sizes;
        const len = sizeArr.length;
        if(len === 0){
            return noPreviewImage;
        }
        for(let i = (len-1) ; i>-1 ; i--){
            if(sizeArr[i].size > 128){
                continue
            }
            else{
                return sizeArr[i].formats[0].preview_url;
            }
        }
    };

    imageDownloadHandler = (icon) => {
        const sizeArr = icon.raster_sizes;
        const len = sizeArr.length;
        if(len === 0){
            return '/';
        }
        for(let i = (len-1) ; i>-1 ; i--){
            if(sizeArr[i].size > 128){
                continue
            }
            else{
                return sizeArr[i].formats[0].preview_url;
            }
        }
    }
    // clickDownload = (e) => {
    //     const target = e.target;
    //     const src = e.target.getAttribute('src');
    //     // console.log(src);
    //     const link = document.createElement("A");
    //     link.href = src;
    //     // console.log(link.href);
    //     link.download = "fuck.png";
    //     // console.log(link)
    //     link.click();
    // }

    bgPickerHandler = () => {
        const {bgOption} = this.props;

        switch(bgOption){
            case('white'):
                return 'search-items-bg-white';
            case('black'):
                return 'search-items-bg-black';
            case('transparent'):
                return 'search-items-bg-transparent';
            default:
                return 'search-items-bg-white';
        };
    };

    secondStageRenderHandler = (icons) => {
        const bgPicker = `search-items-li ${this.bgPickerHandler()}`;
        return icons.map( (icon , index) => {
            return (
                <li
                    className={bgPicker}
                    key={index}>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={this.imageDownloadHandler(icon)} 
                        download='test'>
                        <img
                            // onClick={this.clickDownload}
                            id={`image_${index}`}
                            src={this.previewSizeHandler(icon)}
                            alt="">
                        </img>
                    </a>
                </li>
            )
        });
    };

    
    firstStageRenderHandler = () => {
        const {searchIcons , searchStatus} = this.props;
        
        /* pending status , loading animation */
        if(searchStatus === 'start'){
            return (<MainLoadingSVG />)
        }
        else{
            if(Array.isArray(searchIcons) && searchIcons.length > 0){
                console.log(searchIcons);
                return (
                    <ul className="search-items-ul">{this.secondStageRenderHandler(searchIcons)}</ul>
                ) 
            }
            return (
                <div className="empty-icon-sets">
                    搜尋 {this.state.searchStr} 目前沒有相關內容，<br></br>
                    建議搜尋其他關鍵字。
                </div>
            )
        }
    };

    extractSearchValue = () => {
        const {search} = this.props.location;
        return search.substring(3);
    }

    componentDidMount(){
        /* for skip first stage of life-cycle 'did mount' */
        this.setState({
            dummy: 'initial',
            searchStr: ''
        });
        return;
    };
    
    componentDidUpdate(){
        const searchStr = this.extractSearchValue();
        if(this.state.searchStr !== searchStr){
            this.props.fetchSearchData(searchStr);
            this.setState({
                searchStr
            })
        }
    };


    render() { 
        return (
            <div
                onClick={this.props.resumeCurtain} 
                className="search-main">
                <div className="search-main-inner">
                    {this.firstStageRenderHandler()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        searchIcons: state.searchReducer.searchIcons,
        searchStatus: state.searchReducer.searchStatus,
        bgOption: state.statusReducer.bgOption
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchData: (searchStr) => {
            dispatch({
                type: actionTypes.FETCH_SEARCH_START,
                searchStr
            })
        }
    }
};
 
export default connect(mapStateToProps , mapDispatchToProps)(SearchMain);