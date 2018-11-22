import React from 'react';
import Url from 'url-parse';

class EditSocialMedia extends React.Component {

  constructor(props) {
    super(props);

    this.parseUrl = this.parseUrl.bind(this);
  }

  parseUrl(url) {
      let newUrl = new Url(url);
      let trimmedUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
      return trimmedUrl;
  }

  render () {

    return (
      <div className="socialMediaContainer">
        <p>
          <i className="fab fa-facebook-f"></i>
          <input type="text" value={this.props.facebook} name="facebook"></input>
        </p>
        <p>
          <i className="fab fa-twitter"></i>
          <input type="text" value={this.props.twitter} name="twitter"></input>
        </p>
        <p>
          <i className="fab fa-instagram"></i>
          <input type="text" value={this.props.instagram} name="instagram"></input>
        </p>
      </div>
      )
  }
}

export default EditSocialMedia;