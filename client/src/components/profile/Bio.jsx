import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { BsChat } from 'react-icons/bs';
import { BiBulb,  BiRocket, BiWine} from "react-icons/bi";
import { Form, Button } from 'react-bootstrap'

const Bio = (props) => {
    const [profileBio, setProfileBio] = useState('');

    const user = props.user;
    

    const post = props.post;
  


const bioData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setProfileBio(res.data[0]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    bioData();
}, []);

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
  {props.editMode ?  <Form.Group><Form.Control type="text" placeholder="Name" id="firstName"  required/></Form.Group> :
  <p className="d-block">{profileBio.title}</p>}
  
  </div>
</div>

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiBulb/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Why are you joining VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" placeholder="Name" id="firstName"  required/></Form.Group> :
  <p className="d-block">{profileBio.title}</p>}
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiRocket/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Hobbies or skills that you want to do or use in VoxBox?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" placeholder="Name" id="firstName"  required/></Form.Group> :
  <p className="d-block">{profileBio.title}</p>}
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BsChat/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">What language(s) do you speak, or wish to practice?</h2>
  {props.editMode ?  <Form.Group><Form.Control type="text" placeholder="Name" id="firstName"  required/></Form.Group> :
  <p className="d-block">{profileBio.title}</p>}
  </div>
  </div>
  {props.editMode ? <Button style={buttonStyle} variant="primary" type="submit" >Submit</Button> : null}
 
</div>
  );
};

export default Bio;