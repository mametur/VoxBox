import React from 'react'
import { useState } from 'react'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'

const SignUp = () => {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
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
  }


  return (
    <Container style={{border: '1px solid gray', padding: '25px', maxWidth: '450px'}}> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
      <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name" id="firstName" onChange={handleChange}/>
        <Form.Control type="text" placeholder="Last Name" id="lastName" onChange={handleChange}/>
        <Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} />
        <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} />

        <Button variant="primary" type="submit" block onClick={handleSubmit}>
            Submit
        </Button>
      </Form.Group>
    </Form>
    </Col>
    </Row>
  </Container>
   

  )
}

export default SignUp