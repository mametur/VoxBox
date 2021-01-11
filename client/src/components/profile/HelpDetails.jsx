import React from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';

const HelpDetails = (props) => {

  const post = props.location.state.post;
  const user_id = post.user.user_id
    

   
 

return (
  <div className ='rowC'>
  <Profile user_id={user_id} post={post} onpost={true}/>
  <div className='help-comment'>
  <Help user={post.user} post={post} />
  <Comment />
  </div>
  </div>
);
};

export default HelpDetails;
