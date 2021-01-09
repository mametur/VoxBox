import React , {useState, useEffect} from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';
import { NewComment } from './NewComment';

const HelpDetails = (props) => {

  const post = props.location.state.post;

  console.log('here is post from HelpDetails with state is: ', post);

  const [commentFlag, setCommentFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);

  const fetchData = () => {
    fetch(`/api/posts/${post.post_id}`)
      .then(res => res.json())
      .then(data => setCommentData(data.threads));
  }

  console.log(commentData)

  useEffect(() => {
    fetchData();
  }, [commentFlag])

  console.log(commentFlag)

  return (
    <div className='rowC'>
      <Profile user={post.user} post={post} />
      <div className='help-comment'>
        <Help user={post.user} post={post} />
        {commentData.map(
          comment => <NewComment thread={comment}/>
        )}  
        <Comment setCommentFlag={setCommentFlag} post={post} />
      </div>
    </div>
  );
};

export default HelpDetails;
