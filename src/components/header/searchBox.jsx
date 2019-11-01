import React, { Component } from 'react';
import '../../css/searchBox.css';

// react-router
import {withRouter} from 'react-router-dom';


class SearchBox extends Component {

    state = {
        inputValue: ''
    }

    sanitize = (input) => {
        /* strip all special chars, signs, spaces */
        const str = input.toString().trim().replace(/[^a-zA-Z0-9 ]/g, "")
        return str;
    }


    /* Just provide functionality that let user could click 'Enter' to start search */
    clickEnter = (e) => {
        e.preventDefault();
        if(e.keyCode === 13){
            this.clickToSearch();
        }
    }
    
    clickToSearch = () => {
        const {inputValue} = this.state;
        const value = this.sanitize(inputValue);

        // redirect to searchMain by react-router
        this.props.history.push(`/search?q=${value}`);
    };

    inputSearchBox = (e) => {
        if(e.key !== 'Enter'){
            this.setState({
                inputValue: e.target.value
            })
        }
        if(e.key === 'Enter'){
            this.clickToSearch();
        }
        // return;
    }

    render() {
        return (
            <li className="search-box">
                <input 
                    // onKeyDown={this.clickEnter}
                    onChange={this.inputSearchBox}
                    value={this.state.inputValue}
                    id="search-input-field" 
                    className="search-input" 
                    type="text"
                    maxLength="40"
                    placeholder="Search For Icons e.q. circle, arrow ...">
                </input>
                <span 
                    className="search-span"
                    onClick={this.clickToSearch}>
                </span>
            </li>
        );
    }
}
 
export default withRouter(SearchBox);