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
    let subString = "/artists/";
    let finalUrl;

    if (newUrl.pathname === "/artists/null") {
      finalUrl = 'null';
    } else if (newUrl.pathname.includes("/artists/")) {
      trimmedUrl = newUrl.pathname.replace(subString, '');
      finalUrl = (trimmedUrl.split('/'))[1];
    } else {
      finalUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
    }

    return finalUrl;
  }

  render () {
    let facebookUrl = `https://www.facebook.com/${this.parseUrl(this.props.facebook)}`;
    let twitterUrl = `https://www.twitter.com/${this.parseUrl(this.props.twitter)}`;
    let instagramUrl = `https://www.instagram.com/${this.parseUrl(this.props.instagram)}`;
    let websiteUrl = this.props.website;

    return (
      <div className="socialMediaContainer">
        <h5>FIND ME</h5>
        <hr/>
        {(this.props.facebook !== "null") && (this.parseUrl(this.props.facebook)) ?
          (
          <p>
            <i className="fab fa-facebook-f"></i>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">{this.parseUrl(this.props.facebook)}</a>
          </p>) : ''}
        {(this.props.twitter !== "null") && (this.parseUrl(this.props.twitter)) ?
        (
        <p>
          <i className="fab fa-twitter"></i>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">{this.parseUrl(this.props.twitter)}</a>
        </p>) : ''}
        {(this.props.instagram !== "null") && (this.parseUrl(this.props.instagram)) ?
          (
          <p><i className="fab fa-instagram"></i>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">{this.parseUrl(this.props.instagram)}</a>
          </p>) : ''}
        {(this.props.website !== "null") && (this.props.website) ?
          (
          <p><i className="fas fa-laptop"></i>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{(new Url(this.props.website)).host}</a>
          </p>) : ''}
      </div>
      )
  }
}

export default SocialMedia;