import React from 'react';
import '../../css/curtainLoadingSvg.css';

// loading-svg
import loadingAnimate from 'loading-svg/loading-spin.svg';



const CurtainLoadingSvg = (props) => {
    return (
        <React.Fragment>
            <li className="dummy-li"></li>
            <li className="dummy-li"></li>
            <li className="dummy-li"></li>
            <li className="dummy-li"></li>
            <li className="dummy-li">
            <img 
                    className="curtain-loading-svg" 
                    src={loadingAnimate} 
                    alt="loading-svg" >
                </img>
            </li>
            <li className="dummy-li"></li>
        </React.Fragment>
    );
}
 
export default CurtainLoadingSvg;