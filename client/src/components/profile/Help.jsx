import React from 'react';
import './Profile.css';
import { BsGeoAlt, BsCalendar } from 'react-icons/bs';

const Help = (props) => {
    
    const post = props.post;

    function convert(date){
      let datearray = date.split("T");
      let newdate = datearray[0].split("-");
      const newdate2 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
      return newdate2;  
  }
  
return (
    <div className="column">
      <div className="card-help">
      <p className='icon left'><BsGeoAlt/> {post.post_city}</p>
      <p className='icon right'><BsCalendar/> {convert(post.createdAt)}</p>
      <h1 className="title-help">{post.topic}</h1>
      <p className="help-description">{post.description}</p>
      </div>
    </div>
  );
};

export default Help;