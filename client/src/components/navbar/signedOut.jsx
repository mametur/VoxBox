import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export const SignedOut = (props) =>{

  return (
    <Nav >
    <NavLink to="/signup"><Button variant="outline-primary" block>Sign up</Button></NavLink>
   <NavLink to="/signin"><Button variant="outline-primary" block >Login</Button></NavLink>
  </Nav>

  )
}