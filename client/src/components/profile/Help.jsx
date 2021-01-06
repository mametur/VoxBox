import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { Button } from 'react-bootstrap'
import { BsGeoAlt, BsCalendar } from 'react-icons/bs';

const Help = () => {
    const [profileHelp, setProfileHelp] = useState('');

const helpData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setProfileHelp(res.data[0]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    helpData();
}, []);

return (
    <div>

      <div className="card-help">
      <p className='icon left'><BsGeoAlt/> Location</p>
      <p className='icon right'><BsCalendar/> Date</p>
        <h1 className="title-help">{profileHelp.title}</h1>

        <p>{profileHelp.body}</p>

      </div>


    </div>
  );
};

export default Help;