import React from 'react'
import {Row, Col, Image, Button} from "react-bootstrap";
import HomeImg from "../../assets/pexels-anna-shvets-resizeMed.jpg";

export const Cta = () => {
    return (
        <div>
            <Row className="row-cta">
                <Col xs={12} className="home-img">
                    <Image src={HomeImg} className="home-img-mob" alt="Home image" />
                </Col>
                <Col xs={12} className="cta-section">
                    <p className="cta-title">Nothing is as strong as the heart of a volunteer</p>
                    <div className="cta">
                        <p className="cta-quote">The strong of the community is reflected by the passionate action of its members. Together with <span>Volunteer xChange Box</span>, find a volunteer activity in your area or call for a help from your community.</p>
                        <Button>Join VoxBox Now</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
