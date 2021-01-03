import React from 'react'
import { Card, Button } from "react-bootstrap"
import AvatarImg from "../../assets/avatar_5.jpg"

export const Box = ({post}) => {
    return (
        <Card className="card-div">
            <Card.Body className="card-up">
                <Card.Body>
                    <Card.Img  className="card-img" variant="top" src={AvatarImg} rounded/>
                    <Card.Text className="card-name">{post.id}</Card.Text>
                </Card.Body>
                <Card.Body className="card-up-right">
                    <Card.Text>Location</Card.Text>
                    <Card.Text>Category</Card.Text>
                    <Card.Text>Date</Card.Text>
                </Card.Body>
            </Card.Body>
           
           <Card.Body>
                <Card.Title className="card-title">{post.title}</Card.Title>
                <Card.Text className="card-desc">
                {post.body}...<a className="see-more">(see more)</a>
                </Card.Text>
            </Card.Body>
        </Card>
            
    )
}


{/* <h2>asdasdas dasdasdasda sdasdasdas dasdasd</h2>
<p className="card-desc">asdasd</p> */}