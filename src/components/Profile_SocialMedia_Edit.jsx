import React from 'react';
import Url from 'url-parse';

class EditSocialMedia extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      twitter: this.props.twitter,
      facebook: this.props.facebook,
      instagram: this.props.instagram,
      website: this.props.website
    };

    this.parseUrl = this.parseUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  parseUrl(url) {
    let newUrl = new Url(url);
    let trimmedUrl;
    if (newUrl === "/artists/null") {
      trimmedUrl = 'null';
    } else {
      trimmedUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
    }

    return trimmedUrl;
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
        this.props.sendSocialMediaForm({
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        website: this.state.website
      });
    });
  }

  render () {

    return (
      <div className="socialMediaContainerEdit">
        <h5>FIND ME</h5>
        <hr/>
        <p>
          <i className="fab fa-facebook-f"></i>
          <input type="text"
                 value={this.state.facebook !== 'null' ? this.state.facebook : ''}
                 name="facebook"
                 placeholder="Link your Facebook here."
                 onChange={this.handleChange}></input>
        </p>
        <p>
          <i className="fab fa-twitter"></i>
          <input type="text"
                 value={this.state.twitter !== 'null' ? this.state.twitter : ''}
                 name="twitter"
                 placeholder="Link your Twitter here."
                 onChange={this.handleChange}></input>
        </p>
        <p>
          <i className="fab fa-instagram"></i>
          <input type="text"
                 value={this.state.instagram !== 'null' ? this.state.instagram : ''}
                 name="instagram"
                 placeholder="Link your Instagram here."
                 onChange={this.handleChange}></input>
        </p>
        <p>
          <i className="fas fa-laptop"></i>
          <input type="text"
                 value={this.state.website !== 'null' ? this.state.website : ''}
                 name="website"
                 placeholder="Link your Website here."
                 onChange={this.handleChange}></input>
        </p>
      </div>
      )
  }
}

export default EditSocialMedia;