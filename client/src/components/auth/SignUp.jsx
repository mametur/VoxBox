import React from 'react'
import { useState } from 'react'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'

const SignUp = () => {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  })

  const handleChange = (event)=>{
    setState({
      ...state,
      [event.target.id]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit', state)

    const data = state;

    fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const style = {
    boxShadow: '2px 2px 10px 2px #F2F2F2',
    borderRadius: '10px', 
    padding: '25px', 
    maxWidth: '400px',
    height: '500px',
    marginBottom: '6%',
    marginTop: '6%'
  }

  return (
    <Container style={style}> 
      <Row className="justify-content-center">
        <Col xs sm md lg xl>
        <h2 className="text-primary row justify-content-center">Sign Up</h2>
          <Form>
            <Form.Group><Form.Control type="text" placeholder="Name" id="firstName" onChange={handleChange}/></Form.Group>
            <Form.Group><Form.Control type="text" placeholder="Last Name" id="lastName" onChange={handleChange}/></Form.Group>
            <Form.Group><Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} /></Form.Group>
            <Form.Group><Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} /></Form.Group>
            <Form.Group >
              <Button style={{marginTop: '80px'}} variant="primary" type="submit" block onClick={handleSubmit}>Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp