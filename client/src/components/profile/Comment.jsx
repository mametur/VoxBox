import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { Button } from 'react-bootstrap'

const Comment = () => {
    const [comment, setComment] = useState('');

// handle change fn
// handle submit fn
const submitComment = () => {
  // post on b/e routes
 axios.post('http://localhost:5000/comments', 
 {comment_content:comment //dbname: clname
}).then(() => {
  alert('successful insert');
})

};

const commentData = async () => {
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {comment})
        .then( res => {
          console.log(res.data);
          console.log(res);
        });
};

useEffect(() => {
    commentData();
}, []);

return (
    <div>

      <div className="card-comment">
      
      <form className='form-comment'>
        <label style={{color:'#FCA73D'}}>
         Leave a Reply?
        </label><br/>
        <input type="text" name="comment" onChange={(e) => { 
setComment(e.target.value)
          }} /> 
        <Button style={{margin:'auto', marginTop:'10px', color:'white'}} onClick={submitComment}>Post A Comment</Button>
      </form>
        

      </div>


    </div>
  );
};

export default Comment;