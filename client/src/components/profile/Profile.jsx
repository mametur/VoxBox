import React from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    const user = props.user;
    console.log('here is user obj from profile avatar: ', user, user.user_id);

    const post = props.post;
    console.log('here is post obj from profile avatar: ', post); 

return (
    <div>

      <div className="card-profile">
        <img  src= {require(`../../assets/${user.avatar}`)} style={{ width: "50%", borderRadius: '50%', marginTop:'-25%'}} />
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