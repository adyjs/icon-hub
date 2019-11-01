import React, { Component } from 'react';
import '../../css/indexPage.css';

// components
import ReactSlider from './reactSlider.jsx';

// images
import thirdParty_1 from '../../imgs/iconFinder.svg';

class IndexPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="index-page">
                <div className="inner-container">
                    <ReactSlider />
                    <div className="third-party">
                        <span className="third-party-title">
                            已串接的第三方 APIs
                        </span>
                        <ul>
                            <li>
                                <a 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.iconfinder.com/"
                                >
                                    <img alt="" src={thirdParty_1}></img>
                                </a>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default IndexPage;