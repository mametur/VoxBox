import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import Backlink from '../backlink/Backlink';
import './Profile.css';
import { useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'



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
  
 
   <Container>
       
     <Row >
       <Col  xs={12} sm={12}  style={{ marginTop:"0"}}><Backlink /></Col>  
     <Col xs={12} sm={5} ><Profile  user_id={user_id} onpost={false} editModeToggle={handleEditMode} editMode={editModeOn.status}/></Col>
     <Col xs={12} sm={7}className="text-left"> <Bio editMode={editModeOn.status} editModeToggle={handleEditMode} user_id={user_id}/></Col>
     </Row>
     </Container>
 
  
);

};

export default ProfileDetails;