import React from 'react';
import '../../css/mainLoadingSVG.css';

// loading-svg
import loadingSVG from 'loading-svg/loading-spin.svg';

const MainLoadingSVG = () => {
    return (
        <div className="main-loading-svg">
            <img src={loadingSVG} alt="main-loading-svg" />
        </div>
    );
}
 
export default MainLoadingSVG;