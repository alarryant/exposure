import React from 'react';
import Url from 'url-parse';

class SocialMedia extends React.Component {

  constructor(props) {
    super(props);

    this.parseUrl = this.parseUrl.bind(this);
  }

  parseUrl(url) {
    let newUrl = new Url(url);
    let trimmedUrl;

    if (newUrl.pathname === "/artists/null") {
      trimmedUrl = 'null';
    } else {
      trimmedUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
    }

    return trimmedUrl;
  }

  render () {
    console.log("socialmedia", this.props);

    return (
      <div className="socialMediaContainer">
        {this.props.facebook !== "null" ?
          (
          <p>
            <i className="fab fa-facebook-f"></i>
            <a href={this.props.facebook} target="_blank" rel="noopener noreferrer"> {this.parseUrl(this.props.facebook)}</a>
          </p>) : ''}
        {this.props.twitter !== "null" ?
        (
        <p>
          <i className="fab fa-twitter"></i>
          <a href={this.props.twitter} target="_blank" rel="noopener noreferrer"> {this.parseUrl(this.props.twitter)}</a>
        </p>) : ''}
        {this.props.instagram !== "null" ?
          (
          <p><i className="fab fa-instagram"></i>
            <a href={this.props.instagram} target="_blank" rel="noopener noreferrer">{this.parseUrl(this.props.instagram)}</a>
          </p>) : ''}
      </div>
      )
  }
}

export default SocialMedia;