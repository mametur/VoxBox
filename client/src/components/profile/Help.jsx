import React from 'react';
import './Profile.css';
import { BsGeoAlt, BsCalendar } from 'react-icons/bs';
import { HiCheckCircle } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap"

const Help = (props) => {

  const post = props.post;

  // const userId = useSelector(state => state.user.user_id);

  // const markRender = () => {
  //   if (userId === post.user.user_id) {
  //       return <Button className="mark">Mark as Done <HiCheckCircle className="icon-done"/></Button>
  //   }
  // }

  function convert(date) {
    let datearray = date.split("T");
    let newdate = datearray[0].split("-");
    const newdate2 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
    return newdate2;
  }

  return (
    <div>
      <div className="card-help">
        <p className='icon left'><BsGeoAlt /> {post.post_city}</p>
        <p className='icon right'><BsCalendar /> {convert(post.createdAt)}</p>
        <h1 className="title-help">{post.topic}</h1>
        <p className="help-description">{post.description}</p>
        {/* {markRender} */}
      </div>
    </div>
  );
};

export default Help;