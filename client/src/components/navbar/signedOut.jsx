import React from 'react'
import { Nav, Button } from 'react-bootstrap'


export const SignedOut = (props) =>{

  return (
    <Nav >
    <Nav.Link  href="/signUp"> 
      <Button variant="outline-warning" className="navbar-button">Sign up</Button>
    </Nav.Link>
    <Nav.Link eventKey={2} href="/login">
      <Button variant="outline-warning" >Login</Button>
    </Nav.Link>
  </Nav>

  )
}