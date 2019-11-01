import React, { Component } from 'react';
import '../../css/outSideLinkBar.css';

// components
import OutSideBarLinkItem from './outSideBarLinkItem.jsx';

class OutSideLinkBar extends Component {

    state = {
        linkItem : [
            {
                site : 'https://iconfinder.com',
                siteName : "IconFinder"
            },
            {
                site : 'https://freepik.com',
                siteName : "FreePik"
            }
        ]
    };

    linkItemHandler = () => {
        return this.state.linkItem.map( (ele , index) => {
            return (
                <OutSideBarLinkItem 
                    site={ele.site} 
                    siteName={ele.siteName} 
                    key={index} 
                />
            )
        })
    };

    render() { 
        return (
            <div className="out-side-link-bar">
                <ul>
                    <li className="out-side-link-bar-title">API 串接相關網站 >></li>
                    {this.linkItemHandler()}
                </ul>
            </div>
        );
    }
}
 
export default OutSideLinkBar;