import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Image, Container, Row, Col} from 'react-bootstrap'
import { SignedOut } from './signedOut.jsx'
import { SignedIn } from './signedIn.jsx'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/newlogo.png'

const NavBar = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const links = isLoggedIn ? <SignedIn /> : <SignedOut />

  
  return (
    <Container fluid>
    <Row>
      <Col xs={12} md={12}> 
        <Navbar className="brand" collapseOnSelect expand="md" bg="transparent">
        <NavLink to="/newsfeed"><div className="align-middle mr-3 img-wrapper"><Image src={Logo} rounded className="logo"/></div></NavLink>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
            {links}
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
     
  </Container>
    

  )
}

export default NavBar