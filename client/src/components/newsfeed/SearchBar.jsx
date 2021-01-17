import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const SearchBar = (props) => {

    return (
        <Row className="search">
            <Col xs={12} sm={8} className="search-title">
            Help Requests
            </Col>
            <Col xs={12} sm={4} className="search-input">
                <Form.Control className="search-form" onChange={event => props.searching(event.target.value)} type="text" placeholder="Seach requests by Location" />
            </Col>
        </Row>
    )
}


