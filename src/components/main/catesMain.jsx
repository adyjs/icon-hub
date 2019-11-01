import React, { Component } from 'react';
import '../../css/catesMain.css';

// components
import MainLoadingSVG from './mainLoadingSVG.jsx';

// react-redux
import {connect} from 'react-redux';

// drawer actions 
import * as actionTypes from '../../store/actions/';

// no-preview image
import noPreviewImage from '../../imgs/no_preview_images.jpg';


class CatesMain extends Component {

    state = {
        dummy: null
    };

    componentDidMount(){
        // setting state for skip DidMount component Life-Cycle 
        // then would catch params and send request as DidUpdate stage
        this.setState({
            dummy: 'initial'
        });
        return;
    };
    componentDidUpdate(){
        const catesIdentifier = this.props.match.params.path_2;
        const {prevIdentifier , iconFetchStatus} = this.props;
        if( prevIdentifier !== catesIdentifier && iconFetchStatus !== 'start'){
            this.props.fetchCatesIconSet(catesIdentifier);
            return;
        }
    };

    // path : raster_sizes[array] -> element[index].size 
    // path : raster_sizes[array] -> element[index].formats[0].preview_url 
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
            return 'null';
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
                return 'cates-items-bg-white';
            case('black'):
                return 'cates-items-bg-black';
            case('transparent'):
                return 'cates-items-bg-transparent';
            default:
                return 'cates-items-bg-white';
        };
    };

    secondStageRenderHandler = (icons) => {
        const bgPicker = `cates-items-li ${this.bgPickerHandler()}`;
        return icons.map( (icon , index) => {
            return (
                <li
                    className={bgPicker}
                    key={index}>
                    <a 
                        rel="noopener noreferrer"
                        target="_blank"
                        href={this.imageDownloadHandler(icon)} 
                        download >
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
        const {catesIcons , iconFetchStatus} = this.props;
        
        /* pending status , loading animation */
        if(iconFetchStatus === 'start'){
            return (<MainLoadingSVG />)
        }
        else{
            if(Array.isArray(catesIcons) && catesIcons.length > 0){
                return (
                    <ul className="cates-items-ul" >{this.secondStageRenderHandler(catesIcons)}</ul>
                ) 
            }
            return (
                <div className="empty-icon-sets">
                    你所選取的類別，目前沒有相關內容，<br></br>
                    建議選取別種類別。
                </div>
            )
        }
            
    };


    render() { 
        return (
            <div
                onClick={this.props.resumeCurtain} 
                className="cates-main">
                <div className="cates-main-inner">
                    {this.firstStageRenderHandler()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        catesIcons: state.drawerReducer.catesIcons,
        prevIdentifier: state.drawerReducer.prevIdentifier,
        iconFetchStatus: state.drawerReducer.iconFetchStatus,
        bgOption: state.statusReducer.bgOption
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resumeCurtain: () => {dispatch({type: actionTypes.CURTAIN_RESUME_MAIN_CLICK})},
        fetchCatesIconSet: (catesIdentifier) => {
            return dispatch({
                type: actionTypes.FETCH_CATES_ICON_SETS_START, 
                catesIdentifier,
            });
        }
    }
};

export default connect(mapStateToProps , mapDispatchToProps)(CatesMain);