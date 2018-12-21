import React, { Component } from 'react';

class CatDropDown extends Component {

    constructor(props) {
        super(props);
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
                <button onClick={this.handleClick}>Commercial</button>
                <button onClick={this.handleClick}>Nature</button>
                <button onClick={this.handleClick}>Portrait</button>
                <button onClick={this.handleClick}>Landscape</button>
                <button onClick={this.handleClick}>Wedding</button>
                <button onClick={this.handleClick}>Animals</button>
                <button onClick={this.handleClick}>Family</button>
                <button onClick={this.handleClick}>Children</button>
                <button onClick={this.handleClick}>Baby</button>
            </div>
        );
    }
}

export default CatDropDown;