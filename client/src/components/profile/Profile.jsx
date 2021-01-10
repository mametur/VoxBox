import React from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

const Profile = (props) => {

    const user = props.user;
    

    const post = props.post;
    

    const currentUser_id = useSelector(state => state.user.user_id)





    const buttonStyle = {
      color: 'white'
    }

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
        <p>{props.onpost ? <Link to ={{
                    pathname: `/profile/${user.user_id}`,
                    state: {post: post}
                }}>
        <Button style={buttonStyle}>{user.firstName}'s profile</Button></Link> : null}

        {(user.user_id === currentUser_id && props.onpost === false) ? <Button style={buttonStyle} onClick={props.editModeToggle}>Edit Profile</Button> : null}
        </p>
      </div>
    </div>
  );
};

export default Profile;