import React from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';

const HelpDetails = () => {
return (
  <div className ='rowC'>
  <Profile />
  <div className='help-comment'>
  <Help />
  <Comment />
  </div>
  </div>
);
};

export default HelpDetails;
