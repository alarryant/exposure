import React from 'react';

class EditProfileDesc extends React.Component {
  render() {
    return (
      <div className="profiledesc">
        <textarea value={this.props.bio} placeholder="Enter your bio here."/>
      </div>
    )
  }
}

export default EditProfileDesc;