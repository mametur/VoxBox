import React, { useState} from 'react';
import './Profile.css';
import { BsGeoAlt, BsCalendar } from 'react-icons/bs';
import { HiCheckCircle } from "react-icons/hi";
import { GoIssueClosed } from "react-icons/go";
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap"

const Help = (props) => {

  const post = props.post;

  const userId = useSelector(state => state.user.user_id);
  const [updatedSolved, setUpdatedSolved] =useState(true)

  const updateSolved = () => {
      fetch(`/api/post/solved/${post.post_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              solved: false
          })
      })
      .then(response => response.json())
      .then(result => {
      console.log('Success:', result);
      })
      .catch(error => {
      console.error('Error:', error);
      });

      setUpdatedSolved(false)

    }

  const markRender = () => {
    if (userId === post.user.user_id && updatedSolved) {
        return <Button className="mark" onClick={updateSolved}>Mark as Done <HiCheckCircle className="icon-done"/></Button>
    } else if (updatedSolved == false) {
        return <span className="done-label">This post is done!<GoIssueClosed className="done-icon"/></span>
    }
  }

  function convert(date) {
    let datearray = date.split("T");
    let newdate = datearray[0].split("-");
    const newdate2 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
    return newdate2;
  }

return (
    <div className="column">
      <div className="card-help">
        <p className='icon left'><BsGeoAlt /> {post.post_city}</p>
        <p className='icon right'><BsCalendar /> {convert(post.createdAt)}</p>
        <h1 className="title-help">{post.topic}</h1>
        <p className="help-description">{post.description}</p>
        <div style={{display:"flex", justifyContent:"flex-end"}}>
        {markRender()}
        </div>
      </div>
    </div>
  );
};

export default Help;