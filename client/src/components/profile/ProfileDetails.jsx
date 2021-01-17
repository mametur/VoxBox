import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import Backlink from '../backlink/Backlink';
import './Profile.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'



const ProfileDetails = (props) => {

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
 <Container  style={{marginBottom:"100px"}}>
   <Backlink />
  <div className ='rowC'>
     
    <Profile user_id={user_id} onpost={false} editModeToggle={handleEditMode} editMode={editModeOn.status}/>
    <Bio editMode={editModeOn.status} editModeToggle={handleEditMode} user_id={user_id}/>
  </div>
  </Container>
);

};

export default ProfileDetails;