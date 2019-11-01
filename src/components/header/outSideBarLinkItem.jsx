import React from 'react';
import '../../css/outSideBarLinkItem.css';

const OutSideBarLinkItem = (props) => {
    return (
        <li className="relatedbar-item">
            <a 
                href={props.site}
                rel="noopener noreferrer"
                target="_blank" >{props.siteName}
            </a>
        </li>
    );
}
 
export default OutSideBarLinkItem;