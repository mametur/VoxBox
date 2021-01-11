import React from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';

const Profile = (props) => {

    const user_id = props.user_id
    const currentUser_id = useSelector(state => state.user.user_id)

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const res = await axios.get("/api/users/" + user_id);
            setUser(res.data);
            
        } catch (error) {
            console.log(error);
        }
    };
  
    useEffect(() => {
      fetchUser();
    }, []);

    console.log('profile comp', user)

    const buttonStyle = {
      color: 'white'
    }
    
    
return (
    <div>

    {
      user.avatar ?  <div className="card-profile">
        <img  src= {require(`../../assets/${user.avatar}`)} style={{ width: "50%", borderRadius: '50%', marginTop:'-25%'}} />
        <h1 className="title-name">{user.firstName + ' ' + user.lastName}</h1>
        <p className="help">{user.firstName} is asking for Help!</p>
        <p className='icon'><BsGeoAlt/> Location</p>
        <p>{user.user_city}</p>
        <p className='icon'><BsEnvelope/> Email Address</p>
        <p>{user.email}</p>
        <p>{props.onpost ? <Link to ={{
                    pathname: `/profile/${user.user_id}`,
                }}>
        <Button style={buttonStyle}>{user.firstName}'s profile</Button></Link> : null}

        {(user.user_id === currentUser_id && props.onpost === false) ? <Button style={buttonStyle} onClick={props.editModeToggle}>Edit Profile</Button> : null}
        </p>
      </div>:
      <div className="spinner-border text-success m-5" role="status"> <span className="sr-only">Loading...</span></div>
    }

    </div>
    
     
  );
};

export default Profile;