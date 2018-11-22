import React from 'react';

const avatarWidget = {
  width: '200px',
  padding: '10px',
  margin: '25px 50px 0px 100px',
  float: 'left'
};

const avatarWidget__img = {
  borderRadius: '50%',
  width: '100%'
};

function Avatar(props) {
  return (
    <div className='avatarWidget' style={avatarWidget}>
      {props.avatar && <img className='avatarWidget__img'
                            alt="profileimg"
                            style={avatarWidget__img}
                            src={props.avatar} />}
      <h2 className='avatarWidget__name'>
        {props.name}
      </h2>
    </div>
  );
}


export default Avatar;