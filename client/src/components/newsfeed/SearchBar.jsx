import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const SearchBar = () => {
    return (
        <Row className="search">
            <Col xs={12} sm={8} className="search-title">
                All Help Request
            </Col>
            <Col xs={12} sm={4} className="search-input">
                <Form.Control className="search-form" type="text" placeholder="Seach requests by Location" />
            </Col>
        </Row>
    )
}


