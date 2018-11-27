import React from 'react';
import '../styles/Avatar.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    // this.hoverOn = this.hoverOn.bind(this);
    // this.hoverOn = this.hoverOff.bind(this);
  }

  hoverOn() {
      this.setState({ hover: true });
  }

  hoverOff() {
      this.setState({ hover: false });
  }

  render() {
    return (
      <div className='avatarContainer'>
        <div className='avatarWidget'>
          {this.props.avatar && <img className='avatarWidget__img'
                                alt="profileimg"
                                src={this.props.avatar}
                                // onMouseEnter={this.hoverOn}
                                // onMouseLeave={this.hoverOff}
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