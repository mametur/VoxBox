import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Button } from 'react-bootstrap'
import { useSelector } from "react-redux"

const Comment = ({ post, setCommentFlag }) => {
  const [comment, setComment] = useState('');

  const userId = useSelector(state => state.user.user_id)

  const [comments, setComments] = useState([])

  const submitComment = () => {
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
        console.log(data);
      });
  }

  return (
    <div> 

      <div className="card-comment">

        <form className='form-comment'>
          <label style={{ color: '#FCA73D' }}>
            Leave a Reply?
        </label><br />
          <input type="text" name="comment" onChange={(e) => {
            setComment(e.target.value)
          }} />
          <Button style={{ margin: 'auto', marginTop: '10px', color: 'white' }} onClick={submitComment}>Post A Comment</Button>
        </form>

      </div>

    </div>
  );
};

export default Comment;