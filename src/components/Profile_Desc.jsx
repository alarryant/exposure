import React from 'react';

class ProfileDesc extends React.Component {
  render() {
    return (
      <div className="profiledesc">
        <p>{this.props.bio}</p>
      </div>
    )
  }
}

export default ProfileDesc;