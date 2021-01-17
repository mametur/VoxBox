import React from 'react'
import { useState, useEffect } from 'react'
import { Form, InputGroup, Button, Container, Row, Col, Alert} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { login } from '../../store/actions/loginActions'
import {FaRegEye} from 'react-icons/fa'
import {showHidePassword} from './showPassword.js'
import './lastTouch.css'; 


const SignIn = () => {

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const loginError = useSelector(state => state.auth.loginError)
  const userLoggedIn = useSelector(state => state.user.userLoggedIn)

  const dispatch = useDispatch()

  const handleChange = (event)=>{
    setState({
      ...state,
      [event.target.id]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {...state};

    dispatch(login(data))
   
  }
  
  const style = {
    boxShadow: '2px 2px 10px 2px #F2F2F2',
    borderRadius: '10px', 
    padding: '25px', 
    maxWidth: '400px',
    height: '370px',
    marginBottom: '6%',
    marginTop: '6%',
  }


  if(userLoggedIn) return (<Redirect to="/newsfeed" />)
  
  
  return (
    <Container style={style} className="justify-content-center"> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
    <h2 className="text-primary row justify-content-center">Login</h2>
      <Form>
      <Form.Group><Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} /></Form.Group>
      <InputGroup className="mb-3">
              <Form.Control className="form_control" type="password" placeholder="Password" id="password" onChange={handleChange}  required/>
               <InputGroup.Prepend className= "visfocus" >
                  <InputGroup.Text className="passwordVis"><FaRegEye onClick={showHidePassword}/></InputGroup.Text>
               </InputGroup.Prepend>  
            </InputGroup>
     
      <Form.Group >
      {(loginError)? <Alert variant="danger">{loginError}</Alert> : null}
      <Button style={{marginTop: '50px'}} variant="primary" type="submit" block onClick={handleSubmit} >
            Login
        </Button>
      </Form.Group>
      <NavLink to='/forgot' style={{display:'flex',justifyContent:"center"}}>forgot password?</NavLink>
    </Form>
    </Col>
    </Row>
  </Container>
   
  )
}

export default SignIn