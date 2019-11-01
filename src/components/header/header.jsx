import React, { Component } from 'react';
import '../../css/header.css';

// components
import OutSideLinkBar from './outSideLinkBar.jsx';
import IconHubLinkLogo from './iconHubLinkLogo.jsx';
import SearchBox from './searchBox.jsx';

class Header extends Component {
    state = {  }

    render() { 
        return (
            <div className="header">
                <OutSideLinkBar />
                <div className="header-inner">
                    <ul>
                        <IconHubLinkLogo />
                        <SearchBox />
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Header;