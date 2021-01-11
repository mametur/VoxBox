import React from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Backlink from '../backlink/Backlink';


const Profile = (props) => {

    const user = props.user;
    const post = props.post;

return (
    <div className="column">
     <Backlink />
      <div className="card-profile">
        <img  src= {require(`../../assets/${user.avatar}`)} style={{ width: "50%", borderRadius: '50%', marginTop:'-25%'}} alt = "Profile Pic" />
        <h1 className="title-name">{user.firstName + ' ' + user.lastName}</h1>
        <p className="help">{user.firstName} is asking for Help!</p>
        <p className='icon'><BsGeoAlt/> Location</p>
        <p>{post.post_city}</p>
        <p className='icon'><BsEnvelope/> Email Address</p>
        <p>{user.email}</p>
        <p><Link to ={{
                    pathname: `/profile/${user.user_id}`,
                    state: {post: post}
                }}>
        <Button style={{color:'white'}}>{user.firstName}'s profile</Button></Link>
        </p>
      </div>
    </div>
  );
};

export default Profile;