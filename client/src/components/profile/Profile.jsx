import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Profile = () => {
    const [profileName, setProfileName] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [profileLocation, setProfileLocation] = useState('');
    const [profileEmail, setProfileEmail] = useState('');

const profileData = async () => {
    try {
        const res = await axios.get("https://randomuser.me/api/");
        setProfileEmail(res.data.results[0].email);
        setProfileLocation(res.data.results[0].location.city);
        setProfileImage(res.data.results[0].picture.large);
        setProfileName(
          `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
        );
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    profileData();
}, []);

return (
    <div>

      <div className="card-profile">
        <img src={profileImage} style={{ width: "50%", borderRadius: '50%', marginTop:'-25%'}} />
        <h1 className="title-name">{profileName}</h1>
        <p className="help">is asking for Help!</p>
        <p className='icon'><BsGeoAlt/> Location</p>
        <p>{profileLocation}</p>
        <p className='icon'><BsEnvelope/> Email address</p>
        <p>{profileEmail}</p>
        <p><Link to ={'/profile'}>
        <Button style={{color:'white'}}>{profileName.split(' ')[0]}'s profile</Button></Link>
        </p>
      </div>
    </div>
  );
};

export default Profile;