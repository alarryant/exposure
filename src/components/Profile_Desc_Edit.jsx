import React from 'react';

class EditProfileDesc extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bio: this.props.bio
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({bio: event.target.value});
    this.props.sendBioForm(event.target.value);
  }

  render() {
    return (
      <div className="profiledesc">
        <textarea name="bio"
                  value={this.state.bio}
                  placeholder="Enter your bio here."
                  onChange={this.handleChange}/>
      </div>
    )
  }
}

export default EditProfileDesc;