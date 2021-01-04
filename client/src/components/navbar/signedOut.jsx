import React from 'react'
import { Nav, Button } from 'react-bootstrap'


export const SignedOut = (props) =>{

  return (
    <Nav >
    <Nav.Link  href="/signup"> 
      <Button variant="outline-primary" block>Sign up</Button>
    </Nav.Link>
    <Nav.Link eventKey={2} href="/signin">
      <Button variant="outline-primary" block >Login</Button>
    </Nav.Link>
  </Nav>

  )
}