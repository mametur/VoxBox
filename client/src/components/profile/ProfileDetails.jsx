import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import './Profile.css';

const ProfileDetails = (props) => {

  const post = props.location.state.post;
  

return (
  <div className ='rowC'>
    <Profile user={post.user} post={post} onpost={false}/>
    <Bio user={post.user} post={post}/>
  </div>
);

};

export default ProfileDetails;