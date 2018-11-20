import React, { Component } from 'react';

const avatarWidget = {
  width: '200px',
  padding: '10px',
  margin: '25px 50px 0px 100px',
  float: 'left'
};

const avatarWidget__img = {
  borderRadius: '50%',
  width: '100%'
}

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='avatarWidget' style={avatarWidget}>
        {this.props.avatar && <img className='avatarWidget__img' style={avatarWidget__img} src={this.props.avatar} />}
        <h2 className='avatarWidget__name'>{this.props.name}</h2>
      </div>
    );
  }
}

export default Avatar;