import React , {useState, useEffect} from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';
import { NewComment } from './NewComment';

const HelpDetails = (props) => {

  const post = props.location.state.post;

  const [commentFlag, setCommentFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);

  const fetchData = () => {
    fetch(`/api/posts/${post.post_id}`)
      .then(res => res.json())
      .then(data => setCommentData(data.threads.reverse()));
  }  

  useEffect(() => {
    fetchData();
  }, [commentFlag])

  return (
    <div className='rowC'>
      <Profile user={post.user} post={post} />
      <div className='help-comment'>
        <Help user={post.user} post={post} />  
        <Comment setCommentFlag={setCommentFlag} post={post} />
        {commentData.map(
          comment => <NewComment thread={comment}/>
        )}
      </div>
    </div>
  );
};

export default HelpDetails;
