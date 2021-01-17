import React from 'react'
import {Row, Col, Image} from "react-bootstrap";
import AboutImg from "../../assets/pexels-rodolfo-quirós-resizeMed.jpg";

export const AboutUs = () => {
    return (
            <Row className="row-about">
                <Col xs={12} sm={6} className="about-quote">
                  <h3>ABOUT US</h3>  
                  <p><span className="span1">VoxBox</span> (Volunteer xChange Box) is a social platform made by students in <span className="span2">HYF Belgium</span> that is aimed to connect both volunteers and help seekers within a community so that we can focus on channeling our inner good and assist each other to build a stonger foundation of a better world.</p>
                </Col>
                <Col xs={12} sm={6} className="about-img">
                    <Image src={AboutImg} className="about-us-img" alt="About us image" />
                </Col> 
            </Row>
    )
}
