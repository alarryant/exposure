import React, {Component} from 'react';
import AvatarImg from '../images/ravi-vora-avatar.jpg';

const avatarWidget = {
  width: '200px',
  padding: '10px',
  margin: '0 auto'
};

const avatarWidget__img = {
  borderRadius: '50%',
  width: '100%'
}

class Avatar extends React.Component {
    render() {
      return (
        <div className='avatarWidget' style={avatarWidget}>
            <img className='avatarWidget__img' style={avatarWidget__img} src={AvatarImg}/>
          <h2 className='avatarWidget__name'>John Doe</h2>
        </div>
      );
    }
  }

  export default Avatar;