import React from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';

const HelpDetails = (props) => {

  const post = props.location.state.post;
    // console.log('here is post from HelpDetails with state is: ', post); 

    //  const user = props.location.state.user;
    // console.log('here is user obj from profile avatar: ', user);
 

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
