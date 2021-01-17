import React from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { logOut } from '../../store/actions/loginActions'

const Profile = (props) => {

    const user_id = props.user_id
    const currentUser_id = useSelector(state => state.user.user_id)

    const history = useHistory()
    const dispatch = useDispatch()

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const res = await axios.get("/api/users/" + user_id);
            console.log('data', res.data)
            setUser(res.data);
     
        } catch (error) {
            console.log('error', error);
            history.push('/session_expired')
            dispatch(logOut())
        }
    };
  
    useEffect(() => {
      fetchUser();
    }, [user_id, props.editMode]);

  
    const buttonStyle = {
      color: 'white'
    }
    
    
return (
    <div>

    {
      user.avatar ?  <div className="card-profile">
        <img  src= {require(`../../assets/${user.avatar}.jpg`)} style={{ width: "50%", borderRadius: '50%', marginTop:'-25%'}} />
        <h1 className="title-name">{user.firstName + ' ' + user.lastName}</h1>
         {/* <p className="help">{user.firstName} is asking for Help!</p>  */}
        <p className='icon'><BsGeoAlt/> Location</p>
        <p>{user.user_city}</p>
        <p className='icon'><BsEnvelope/> Email Address</p>
        <p>{user.email}</p>
        <p>{props.onpost ? <Link to ={{
                    pathname: `/profile/${user.user_id}`,
                }}>
        <Button style={buttonStyle}>{user.firstName}'s profile</Button></Link> : null}

        {(user.user_id === currentUser_id && props.onpost === false) ? <Button style={buttonStyle} onClick={props.editModeToggle} disabled={props.editMode}>Edit Profile</Button> : null}
        </p>
      </div>:
      <div className="spinner-border text-success m-5" role="status"> <span className="sr-only">Loading...</span></div>
    }

    </div>
    
     
  );
};

export default Profile;