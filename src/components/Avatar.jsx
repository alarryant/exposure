import React from 'react';
import '../styles/Avatar.css';

function Avatar(props) {
  console.log("Avatar", props)
  return (
    <div className='avatarContainer'>
      <div className='avatarWidget'>
        {props.avatar && <img className='avatarWidget__img'
                              alt="profileimg"
                              src={props.avatar} />}
      </div>
        <h2 className='avatarWidget__name'>
          {props.name}
        </h2>
    </div>
  );
}


export default Avatar;