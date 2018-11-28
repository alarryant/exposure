import React from 'react';
import '../styles/Avatar.css';

class Avatar extends React.Component {

  render() {
    return (
      <div className="avatarSocMedLeft">
        <div className='avatarWidget'>
          {this.props.avatar && <img className='avatarWidget__img'
                                alt="profileimg"
                                src={this.props.avatar}
                                 />}
        </div>
          <h2 className='avatarWidget__name'>
            {this.props.name}
          </h2>
      </div>
    );
  }
}


export default Avatar;