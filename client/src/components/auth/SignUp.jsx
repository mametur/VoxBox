import React from 'react'
import { useState } from 'react'
import { Form, InputGroup, Button, Container, Row, Col, Alert} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import {FaRegEye} from 'react-icons/fa'
import {showHidePassword} from './showPassword.js'
import './lastTouch.css'; 

const SignUp = () => {

  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    password: null,
    email: null,
  })

  const [signedUp, setSignedUp] = useState()

  const [signUpErrors, setSignUpErrors] = useState()

  const handleChange = (event)=>{
    setState({
      ...state,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

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
        
        if(data.status < 200 || data.status > 300){
          
          setSignUpErrors(data.message)
        }else{
          setSignUpErrors(null)
          setSignedUp(true)
        }
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


  if(signedUp) return (<Redirect to="signin" />)

  return (
    <Container style={style}> 
      <Row className="justify-content-center">
        <Col xs sm md lg xl>
        <h2 className="text-primary row justify-content-center">Sign Up</h2>
          <Form>
            <Form.Group><Form.Control type="text" placeholder="Name" id="firstName" onChange={handleChange} required/></Form.Group>
            <Form.Group><Form.Control type="text" placeholder="Last Name" id="lastName" onChange={handleChange} required/></Form.Group>
            <Form.Group><Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} required/></Form.Group>
            <InputGroup className="mb-3">
              <Form.Control className="form_control" type="password" placeholder="Password" id="password" onChange={handleChange}  required/>
               <InputGroup.Prepend >
                  <InputGroup.Text  className="passwordVis"><FaRegEye onClick={showHidePassword}/></InputGroup.Text>
               </InputGroup.Prepend>  
            </InputGroup>

            {(signUpErrors)? <Alert variant="danger">{signUpErrors}</Alert> : null}

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

       