import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/actions/loginActions'




export const SignedIn = () =>{

  const dispatch = useDispatch()
  const currentUser_id = useSelector(state => state.user.user_id)

  const logOutHanler = ()=> {
    dispatch(logOut())
  }

  return (
    <Nav >
      <NavLink to={`/profile/${currentUser_id}`}><Button variant="outline-primary" className="navbar-button" block >My Profile</Button></NavLink>
      <NavLink to="/"> <Button variant="outline-primary" className="logout-button" block onClick={logOutHanler}>Logout</Button></NavLink>
    </Nav>

  )
}