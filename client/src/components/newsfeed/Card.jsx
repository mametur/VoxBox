import React from 'react'
import { Card, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi";
import { useSelector } from 'react-redux';

export const Box = ({post, setUpdatePost}) => {

    console.log('hello')

    function convert(date){
        let datearray = date.split("T");
        let newdate = datearray[0].split("-");
        const newdate2 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
        return newdate2;
        
    }

    function cutDescription(arr) {
        let desc =arr.slice(0, 70);
        return desc;
    }
 function cutTitle(arr) {
        let desc =arr.slice(0, 25);
        return desc;
    }

    
    const userId = useSelector(state => state.user.user_id);


    const updateSolved = () => {
        fetch(`/api/post/solved/${post.post_id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                solved: false
            })
        })
        .then(response => response.json())
        .then(result => {
        console.log('Success:', result);
        })
        .catch(error => {
        console.error('Error:', error);
        });

        setUpdatePost(state => !state)
    }

    const markRender = () => {
        if (userId === post.user.user_id) {
            return <Button className="mark" onClick={updateSolved}>Mark as Done <HiCheckCircle className="icon-done"/></Button>
        }
    }
  const style={
      width: '10rem',
      padding:"10px",
       margin:"10px 0px 20px 0px",
  }
    return (
   <Col  xs={12} sm={4}style={style} > <Card style ={{padding:"10px"}}>
            <Card.Body className="card-up">
                <Card.Body>
                    <Link to ={{
                        pathname: `/profile/${post.user.user_id}`,
                        state: {post:post}
                    }}><Card.Img className="card-img" variant="top" src=
                    {require(`../../assets/${post.user.avatar}.jpg`)} rounded/>  </Link>
                    <Card.Text className="card-name">{post.user.firstName} {post.user.lastName}</Card.Text>
                </Card.Body>
                <Card.Body className="card-up-right">
                    <Card.Text>{post.post_city}</Card.Text>
                    <Card.Text>{post.category}</Card.Text>
                    <Card.Text>{convert(post.createdAt)}</Card.Text>
                </Card.Body>    
            </Card.Body>
           
           <Card.Body className="card-down">
                <Card.Title className="card-title">{cutTitle(post.topic)}...</Card.Title>
                <Card.Text className="card-desc" style={{height:"70px"}}>
                {cutDescription(post.description)}...<Link to ={{
                    pathname: `/help/${post.post_id}`,
                    state: {
                        post: post,

                        }
                }} className="see-more">see more</Link>
                </Card.Text>
                {markRender()}
            </Card.Body>
        </Card>
        </Col>
    )

}

