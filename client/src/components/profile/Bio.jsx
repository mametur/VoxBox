import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import './Profile.css';
import { BsChat,BsGeoAlt } from 'react-icons/bs';
import { BiBulb,  BiRocket, BiWine} from "react-icons/bi";
import { MdFace } from 'react-icons/md'
import { Form, Button, Image } from 'react-bootstrap'
import { checkProfile } from '../../store/actions/userActions'
import { useHistory } from 'react-router-dom'
import { logOut } from '../../store/actions/loginActions'

import avatar1 from '../../assets/avatar_1.jpg'
import avatar2 from '../../assets/avatar_2.jpg'
import avatar3 from '../../assets/avatar_3.jpg'
import avatar4 from '../../assets/avatar_4.jpg'
import avatar5 from '../../assets/avatar_5.jpg'
import avatar6 from '../../assets/avatar_6.jpg'
import avatar7 from '../../assets/avatar_7.jpg'
import avatar8 from '../../assets/avatar_8.jpg'

const Bio = (props) => {

  const currentUser_id = useSelector(state => state.user.user_id)
  const user_id = props.user_id

  const [profileBio, setProfileBio] = useState({});

  const dispatch = useDispatch();
  const history = useHistory()

const fetchBioData = async () => {
    try {
        const res = await axios.get("/api/users/" + user_id);
        setProfileBio(res.data);
 
    } catch (error) {
        console.log(error);
        history.push('/session_expired')
        dispatch(logOut())
    }
};

const updateBioData = async (event) => {
  event.preventDefault()
  try {
      const res = await axios.put("/api/users/" + currentUser_id, profileBio);
        props.editModeToggle()
        dispatch(checkProfile(user_id))
      
  } catch (error) {
      console.log(error);
      history.push('/session_expired')
      dispatch(logOut())
  }
};

useEffect(() => {
  fetchBioData();
}, [props.editMode, user_id]);

const handleChange = (event)=>{
  setProfileBio({
    ...profileBio,
    [event.target.id]: event.target.value
  })
}

const handleAvatarChooser = (event) => {
 
  let classes = 'avatar';
  let els = document.getElementsByClassName('avatar selected');
  if(els){
      while (els[0]) {
          els[0].classList.remove('selected')
      }
  }
  event.target.className = classes.replace('avatar','avatar selected');

 
  setProfileBio({
    ...profileBio,
    avatar: event.target.id
  })

  dispatch({
    type: 'Avatar_Changed',
    payload: {avatar: event.target.id}
  })
  localStorage.setItem('avatar', event.target.id)
}


const buttonStyle = {
  marginTop: '20px',
  color: 'white',
  marginLeft: '10px'
}

const cancelButtonStyle = {
  marginTop: '20px',
  color: 'white',
  marginLeft: '10px',
  backgroundColor: 'gray'
}

const imgStyle = {
  width: '65px',
  marginLeft: '15px',
  cursor: 'pointer'
}

return (

<div className="w-50 my-3 p-3 bg-white rounded box-shadow column bio">

  <h1 className="title-about pb-2 mb-0">About Me</h1>    

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiWine/></p>     
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center lh-125 w-100 bio-h2">Get to know me</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text"  id="introduction" onChange={handleChange} value={profileBio.introduction} required/></Form.Group> :
  <p className="d-block">{profileBio.introduction}</p>}
  
  </div>
</div>

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiBulb/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Why are you joining VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" id="reason" onChange={handleChange} value={profileBio.reason} required/></Form.Group> :
  <p className="d-block">{profileBio.reason}</p>}
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiRocket/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Hobbies or skills that you want to do or use in VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text"  id="hobbies" onChange={handleChange} value={profileBio.hobbies} required/></Form.Group> :
  <p className="d-block">{profileBio.hobbies}</p>}
  </div>
  </div>

  <div className="media pt-3">
    <p className='mr-2 rounded bio-icon'><BsChat/></p>
    <div className='media-body pb-1 mb-0 small border-gray'>
      <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">What language(s) do you speak, or wish to practice?</h2>
       {props.editMode ?  <Form.Group><Form.Control type="text" id="language" onChange={handleChange} value={profileBio.language} required/></Form.Group> :
      <p className="d-block">{profileBio.language}</p>}
    </div>
  </div>

  {
    props.editMode ?  <div className="media pt-3">
    <p className='mr-2 rounded bio-icon'><BsGeoAlt/></p>
    <div className='media-body pb-1 mb-0 small border-gray'>
      <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Which city do you live?</h2>
       <Form.Group><Form.Control type="text" id="user_city" onChange={handleChange} value={profileBio.user_city} required/></Form.Group>
    </div>
  </div> : null
  }
  {
    props.editMode ?  <div className="media pt-3">
    <p className='mr-2 rounded bio-icon'><MdFace/></p>
    <div className='media-body pb-1 mb-0 small border-gray'>
      <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">chose your avatar</h2>
      <Image id="avatar_1" style={imgStyle} src={avatar1} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_2" style={imgStyle} src={avatar2} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_3" style={imgStyle} src={avatar3} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_4" style={imgStyle} src={avatar4} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_5" style={imgStyle} src={avatar5} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_6" style={imgStyle} src={avatar6} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_7" style={imgStyle} src={avatar7} onClick={handleAvatarChooser} rounded className="avatar"/>
      <Image id="avatar_8" style={imgStyle} src={avatar8} onClick={handleAvatarChooser} rounded className="avatar"/>
    </div>
  </div> : null
  }

  {props.editMode ? <Button style={buttonStyle} variant="primary" onClick={updateBioData} type="submit" >Submit</Button>  : null}
  {props.editMode ? <Button style={cancelButtonStyle} onClick={props.editModeToggle} type="submit" >Cancel</Button>  : null}
 
</div>
  );
};

export default Bio;