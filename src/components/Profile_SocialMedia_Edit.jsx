import React from 'react';
import Url from 'url-parse';

class EditSocialMedia extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      twitter: this.props.twitter,
      facebook: this.props.facebook,
      instagram: this.props.instagram
    };

    this.parseUrl = this.parseUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  parseUrl(url) {
      let newUrl = new Url(url);
      let trimmedUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
      return trimmedUrl;
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {

    return (
      <div className="socialMediaContainer">
        <p>
          <i className="fab fa-facebook-f"></i>
          <input type="url"
                 value={this.state.facebook !== 'null' ? this.state.facebook : ''}
                 name="facebook"
                 placeholder="Link your Facebook here."
                 onChange={this.handleChange}></input>
        </p>
        <p>
          <i className="fab fa-twitter"></i>
          <input type="url"
                 value={this.state.twitter !== 'null' ? this.state.twitter : ''}
                 name="twitter"
                 placeholder="Link your Twitter here."
                 onChange={this.handleChange}></input>
        </p>
        <p>
          <i className="fab fa-instagram"></i>
          <input type="url"
                 value={this.state.instagram !== 'null' ? this.state.instagram : ''}
                 name="instagram"
                 placeholder="Link your Instagram here."
                 onChange={this.handleChange}></input>
        </p>
      </div>
      )
  }
}

export default EditSocialMedia;