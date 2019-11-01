import React, { Component } from 'react';
import '../../css/footer.css';

// images
import githubLogo from '../../imgs/footer-github-image.svg';

// react-router
import {Link} from 'react-router-dom';

// drawer action
import * as actionTypes from '../../store/actions/';

// react-redux
import {connect} from 'react-redux';

class Footer extends Component {
    render() { 
        return (
            <div
                onClick={this.props.redumeCurtain} 
                className="footer">
                <section className="footer-upper-bar" >
                    <ul className="footer-content-ul" >
                        <li className="footer-content-list title">Author</li>
                        <li className="footer-content-list author">adyjs</li>
                        <li className="footer-content-list email">adyjsdev@gmail.com</li>
                        <li className="footer-content-list github">
                            <a 
                                href="https://github.com/adyjs" 
                                target="_blank"
                                rel="noopener noreferrer" >GitHub</a>
                        </li>
                    </ul>
                    <ul className="footer-content-ul" >
                        <li className="footer-content-list title">Claim</li>
                        <li className="footer-content-list terms-policy">
                            <Link to="/terms-and-policy" >Terms &amp; Policy</Link>
                        </li>
                    </ul>
                    <ul className="footer-content-ul" >
                        <li className="footer-content-list title">Dev APIs</li>
                        <li className="footer-content-list dev-apis">
                            <a 
                                href="https://developer.iconfinder.com/" 
                                target="_blank"
                                rel="noopener noreferrer" >IconFinder Public APIs V3</a>
                        </li>
                    </ul>
                </section>
                <section className="footer-lower-logo-bar">
                    <ul>
                        <li className="title-logo">
                            <a 
                                href="/"
                                rel="noopener noreferrer"
                                target="_blank" 
                                className="title-logo-anchor" >Icon
                                <span 
                                    className="title-logo-span">Hub
                                </span>
                            </a>
                        </li>
                        <li className="footer-logo">
                            <a 
                                href="https://github.com/adyjs"
                                rel="noopener noreferrer"
                                target="_blank" 
                                className="title-logo-anchor" >
                                <img 
                                    src={githubLogo} 
                                    alt="footer-github-logo"
                                    className="footer-logo-img"    
                                />
                            </a>
                        </li>
                        
                    </ul>
                </section>
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        redumeCurtain: () => {dispatch({type: actionTypes.CURTAIN_RESUME_FOOTER_CLICK})}
    }
}
 
export default connect(null , mapDispatchToProps)(Footer);