import React from 'react'
import {Image, Row, Col, Button} from "react-bootstrap"
import "./newsfeed.css"
import AvatarImg from "../../assets/avatar_5.jpg"

export const NewsfeedHeader = () => {
    return (

        <Row className="header">
            <div className="overlay">
                <div className="header-div">
                    <Col xs={12} sm={2} >
                        <Image src={AvatarImg} roundedCircle />
                    </Col>
                    <Col xs={12} sm={10}>
                        <p className="user-name">Welcome, Name Surname</p>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Button className="btn-post">Request A Help</Button>
                    </Col>
                </div>
            </div>
        </Row>
    )
}
