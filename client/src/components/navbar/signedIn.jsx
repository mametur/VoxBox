import React from 'react'
import { Nav, Button } from 'react-bootstrap'




export const SignedIn = () =>{

  return (
    <Nav >
    <Nav.Link  href="/profile/:id"> 
      <Button variant="outline-primary" className="navbar-button" block>My Profile</Button>
    </Nav.Link>
    <Nav.Link eventKey={2} href="/">
      <Button variant="outline-primary" className="logout-button" block>Logout</Button>
    </Nav.Link>
  </Nav>

  )
}