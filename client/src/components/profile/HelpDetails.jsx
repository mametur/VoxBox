import React from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';

const HelpDetails = (props) => {

  const post = props.location.state.post;
<<<<<<< HEAD
    // console.log('here is post from HelpDetails with state is: ', post); 
=======
    
>>>>>>> front-end

   
 

return (
  <div className ='rowC'>
  <Profile user={post.user} post={post}/>
  <div className='help-comment'>
  <Help user={post.user} post={post} />
  <Comment />
  </div>
  </div>
);
};

export default HelpDetails;
