import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap'
import { useSelector } from "react-redux"

const Comment = ({ post, setCommentFlag }) => {

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const userId = useSelector(state => state.user.user_id)

  const submitComment = (e) => {

    e.preventDefault();
    console.log(comment)

    if(comment !== '') {

    // post on b/e routes

    setCommentFlag(state => !state)

    fetch('/api/post/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment, postId: post.post_id, userId
      }),
    })
      .then(response => response.json())
      .then(data => {
       const checkData =data
      });

      setComment('')
    } else {
      setErrorMessage("Please write something before leaving a comment!")
    }
  }

  return (
    <div> 

      <div className="card-comment">

        <form className='form-comment' onSubmit={submitComment}>
          <label style={{ color: '#FCA73D', fontSize:"16px" }}>
            Leave a Reply?
        </label><br />
          <textarea style={{fontSize:"16px"}} value={comment} rows="4" cols="50" type="text" name="comment" onChange={(e) => {
            setComment(e.target.value)
            setErrorMessage("")
          }} onKeyDown={(event) => {
            if(event.keyCode == 13 && !event.shiftKey) {
              submitComment(event);
              event.target.value = '';
            } else if (event.keyCode == 13 && event.shiftKey) {
              return null
            }
          }} />
          <p className="error-message">{errorMessage}</p>
          <Button type="submit" style={{ margin: 'auto', marginTop: '5px', color: 'white' }} >Post A Comment</Button>
        </form>

      </div>

    </div>
  );
};

export default Comment;