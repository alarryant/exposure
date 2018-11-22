import React, { Component } from 'react';

class CatDropDown extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.searchResult(e.target.innerText);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className='dropdown-content'>
                <a href='#' onClick={this.handleClick}>Commercial</a>
                <a href='#' onClick={this.handleClick}>Nature</a>
                <a href='#' onClick={this.handleClick}>Portrait</a>
                <a href='#' onClick={this.handleClick}>Landscape</a>
                <a href='#' onClick={this.handleClick}>Wedding</a>
                <a href='#' onClick={this.handleClick}>Animals</a>
                <a href='#' onClick={this.handleClick}>Family</a>
                <a href='#' onClick={this.handleClick}>Children</a>
                <a href='#' onClick={this.handleClick}>Baby</a>
            </div>
        );
    }
}

export default CatDropDown;