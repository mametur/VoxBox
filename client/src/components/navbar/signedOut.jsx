import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export const SignedOut = (props) =>{
   const style = {
    marginLeft: '10px',
    marginTop: '10px'
  }

  return (
    <Nav >
    <NavLink to="/signup" style={style}><Button variant="outline-primary" block >Sign up</Button></NavLink>
   <NavLink to="/signin" style={style}><Button variant="outline-primary" block >Login</Button></NavLink>
  </Nav>

  )
}