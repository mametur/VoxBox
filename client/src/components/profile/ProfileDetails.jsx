import React from 'react';
import Profile from './Profile';
import Bio from './Bio';

import './Profile.css';
import { useState, useEffect } from 'react';

const ProfileDetails = (props) => {

  const post = props.location.state.post;
  const user_id = props.match.params.id

  console.log(user_id)

 

 

  const [editModeOn, setEditModeOn] = useState({
    status: false
  })


  const handleEditMode = () => {
    setEditModeOn({status:!editModeOn.status})
  }
console.log(editModeOn)
return (
  <div className ='rowC'>
    <Profile user_id={user_id} post={post} onpost={false} editModeToggle={handleEditMode}/>
    <Bio editMode={editModeOn.status} editModeToggle={handleEditMode} user_id={user_id}/>
  </div>
);

};

export default ProfileDetails;