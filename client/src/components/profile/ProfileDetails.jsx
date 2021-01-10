import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import './Profile.css';
import { useState } from 'react';

const ProfileDetails = (props) => {

  const post = props.location.state.post;
  
  const [editModeOn, setEditModeOn] = useState({
    status: false
  })

  const handleEditMode = () => {
    setEditModeOn({status:!editModeOn.status})
  }
console.log(editModeOn)
return (
  <div className ='rowC'>
    <Profile user={post.user} post={post} onpost={false} editModeToggle={handleEditMode}/>
    <Bio user={post.user} post={post} editMode={editModeOn.status}/>
  </div>
);

};

export default ProfileDetails;