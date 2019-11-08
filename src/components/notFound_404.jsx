import React, { Component } from 'react';
import '../css/notFound_404.css';

// react-router
import {Link} from 'react-router-dom';

const NotFound_404 = () => {
    return (
        <div class="not-found-404">
            <p className="not-found-404-main-title" >404</p>
            <p className="not-found-404-main-content" >你走錯地方了<br></br>you get the wrong way, you know...</p>
            <Link to="/" className="not-fount-back-to-index-link">
                <span className="not-fount-back-to-index-link-content" >
                    回首頁<br></br>Back To Index Page
                </span>
            </Link>
        </div>
    );
}
 
export default NotFound_404;