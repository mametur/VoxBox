import React from 'react'
import {useSelector} from "react-redux"
import {Image, Row, Col, Button} from "react-bootstrap"
import "./newsfeed.css"

export const NewsfeedHeader = (props) => {

    const userFirstName = useSelector(state => state.user.firstName)
    const userLastName = useSelector(state => state.user.lastName)
    const userAvatar = useSelector(state => state.user.avatar)

   

    return (

        <Row className="header">
            <div className="overlay">
                <div className="header-div">
                    <Col xs={12} sm={1} >
                        <Image src={require(`../../assets/${userAvatar}.jpg`)} roundedCircle />
                    </Col>
                    <Col xs={12} sm={11} style={{paddingLeft:"0"}}>
                        <p className="user-name">Welcome, {userFirstName} {userLastName}</p>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Button className="btn-post" onClick={props.formToggle}>Request Help</Button>
                    </Col>
                </div>
            </div>
        </Row>
    )
}
