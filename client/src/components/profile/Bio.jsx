import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import './Profile.css';
import { BsChat } from 'react-icons/bs';
import { BiBulb,  BiRocket, BiWine} from "react-icons/bi";
import { Form, Button } from 'react-bootstrap'

const Bio = (props) => {

  const currentUser_id = useSelector(state => state.user.user_id)

  const [profileBio, setProfileBio] = useState({});

const fetchBioData = async () => {
    try {
        const res = await axios.get("/api/users/" + currentUser_id);
        setProfileBio(res.data);
        
    } catch (error) {
        console.log(error);
    }
};

const updateBioData = async (event) => {
  event.preventDefault()
  try {
      await axios.put("/api/users/" + currentUser_id, profileBio);
      props.editModeToggle()
      
  } catch (error) {
      console.log(error);
  }
};

useEffect(() => {
  fetchBioData();
}, [props.editMode]);

const handleChange = (event)=>{
  setProfileBio({
    ...profileBio,
    [event.target.id]: event.target.value
  })
}


const buttonStyle = {
  marginTop: '20px',
  color: 'white',
  marginLeft: '10px'
}

return (

<div className="w-50 my-3 p-3 bg-white rounded box-shadow">
  <h1 className="title-about pb-2 mb-0">About Me</h1>    

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiWine/></p>     
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center lh-125 w-100 bio-h2">Get to know me</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text"  id="introduction" onChange={handleChange} required/></Form.Group> :
  <p className="d-block">{profileBio.introduction}</p>}
  
  </div>
</div>

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiBulb/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Why are you joining VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" id="reason" onChange={handleChange} required/></Form.Group> :
  <p className="d-block">{profileBio.reason}</p>}
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiRocket/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Hobbies or skills that you want to do or use in VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text"  id="hobbies" onChange={handleChange} required/></Form.Group> :
  <p className="d-block">{profileBio.hobbies}</p>}
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BsChat/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">What language(s) do you speak, or wish to practice?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" id="language" onChange={handleChange} required/></Form.Group> :
  <p className="d-block">{profileBio.language}</p>}
  </div>
  </div>
  {props.editMode ? <Button style={buttonStyle} variant="primary" onClick={updateBioData} type="submit" >Submit</Button> : null}
 
</div>
  );
};

export default Bio;