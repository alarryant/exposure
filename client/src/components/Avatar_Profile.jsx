import React from 'react';
import '../styles/Avatar.css';

class AvatarProfile extends React.Component {

  render() {
    return (
      <div>
        <div className='avatarProfile'>
          {this.props.avatar && <img className='avatarImgProfile'
                                alt="profileimg"
                                src={this.props.avatar}
                                 />}
        </div>
          <h2 className='avatarNameProfile'>
            {this.props.name}
          </h2>
      </div>
    );
  }
}


export default AvatarProfile;