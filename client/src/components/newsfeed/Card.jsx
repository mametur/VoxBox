import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Box = ({post}) => {

    console.log('hello')

    function convert(date){
        let datearray = date.split("T");
        let newdate = datearray[0].split("-");
        const newdate2 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
        return newdate2;
        
    }

    function cutDescription(arr) {
        let desc =arr.slice(0, 100);
        return desc;
    }

    

    return (
        <Card className="card-div">
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
                <Card.Title className="card-title">{post.topic}</Card.Title>
                <Card.Text className="card-desc">
                {cutDescription(post.description)}...<Link to ={{
                    pathname: `/help/${post.post_id}`,
                    state: {post: post}
                }} className="see-more">see more</Link>
                </Card.Text>
            </Card.Body>
        </Card>
            
    )
}
