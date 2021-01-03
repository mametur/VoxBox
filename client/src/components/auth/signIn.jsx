import React from 'react'
import { useState } from 'react'
import { Form, Button, Container, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/actions/loginActions'


const SignIn = () => {

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)

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
    height: '300px',
    marginBottom: '6%',
    marginTop: '6%'
  }


  return (
    <Container style={style} className="justify-content-center"> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
    <h2 className="text-primary row justify-content-center">Login</h2>
      <Form>
      <Form.Group><Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} /></Form.Group>
      <Form.Group><Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} /></Form.Group>
      <Form.Group >
      <Button style={{marginTop: '80px'}} variant="primary" type="submit" block onClick={handleSubmit} >
            Login
        </Button>
      </Form.Group>
    </Form>
    </Col>
    </Row>
  </Container>
   
  )
}

export default SignIn