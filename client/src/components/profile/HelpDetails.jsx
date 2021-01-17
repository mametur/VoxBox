import React , {useState, useEffect} from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';
import { NewComment } from './NewComment';
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/actions/loginActions'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Backlink from '../backlink/Backlink';
const HelpDetails = (props) => {

  const post = props.location.state.post;
  const user_id = post.user.user_id

  const dispatch = useDispatch()
  const history = useHistory()

  const [commentFlag, setCommentFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);

  const fetchData = () => {
    fetch(`/api/posts/${post.post_id}`)
      .then(res => res.json())
      .then(data => {
        if(data.auth === false){ 
          history.push('/session_expired')
          dispatch(logOut())
           return}else{setCommentData(data.threads)}
        });
  }

  useEffect(() => {
    fetchData();
  }, [commentFlag])

  return (
    <Container style={{marginBottom:"100px"}} >
      
      <Row> <Backlink /></Row>
      <Row className="justify-content-md-center">  
     
     
     <Col xs={12} sm={4} style={{marginTop:"100px"}} > <Profile user_id={user_id} post={post} onpost={true}/></Col>
   
    <Col xs={12} sm={8}style={{marginTop:"100px"}} >  <Help  user={post.user} post={post} /> <Container>
        {commentData.map(
          comment => <NewComment key={comment.comment_id} thread={comment}/>
        )}  
      <Comment  setCommentFlag={setCommentFlag} post={post} /></Container>
      </Col>
      </Row>
   
   
    </Container>
  );

};

export default HelpDetails;
//merged