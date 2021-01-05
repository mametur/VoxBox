import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/actions/loginActions'




export const SignedIn = () =>{

  const dispatch = useDispatch()

  const logOutHanler = ()=> {
    dispatch(logOut())
  }

  return (
    <Nav >
      <NavLink to="/profile/:id"><Button variant="outline-primary" className="navbar-button" block >My Profile</Button></NavLink>
      <NavLink to="/"> <Button variant="outline-primary" className="logout-button" block onClick={logOutHanler}>Logout</Button></NavLink>
    </Nav>

  )
}