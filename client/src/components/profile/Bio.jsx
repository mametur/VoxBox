import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { BsChat } from 'react-icons/bs';
import { BiBulb,  BiRocket, BiWine} from "react-icons/bi";

const Bio = (props) => {
    const [profileBio, setProfileBio] = useState('');

    const user = props.user;
    console.log('here is user obj from bio: ', user, user.user_id);

    const post = props.post;
    console.log('here is post obj from bio: ', post); 


const bioData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setProfileBio(res.data[0]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    bioData();
}, []);

return (

<div className="w-50 my-3 p-3 bg-white rounded box-shadow column bio">
  <h1 className="title-about pb-2 mb-0">About Me</h1>    

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiWine/></p>     
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center lh-125 w-100 bio-h2">Get to know me</h2>
  <p className="d-block">{profileBio.title}</p>
  </div>
</div>

<div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiBulb/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Why are you joining VoxBox?</h2>
  <p className="d-block">{profileBio.title}</p>
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BiRocket/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">Hobbies or skills that you want to do or use in VoxBox?</h2>
  <p className="d-block">{profileBio.title}</p>
  </div>
  </div>

  <div className="media pt-3">
  <p className='mr-2 rounded bio-icon'><BsChat/></p>
  <div className='media-body pb-1 mb-0 small border-gray'>
  <h2 className="d-flex justify-content-between align-items-center w-100 bio-h2">What language(s) do you speak, or wish to practice?</h2>
  <p className="d-block">{profileBio.title}</p>
  </div>
  </div>

</div>
  );
};

export default Bio;