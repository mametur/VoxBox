import React from 'react'
import { useState } from 'react'
import { Navbar, Image, Nav, Container, Row, Col} from 'react-bootstrap'
import { SignedOut } from './signedOut.jsx'
import { SignedIn } from './signedIn.jsx'
import Logo from '../../assets/Logo_Long-removebg.png'

const NavBar = () => {

  const [state, setState] = useState({
    isLoggedIn: false
  })


  const links = state.isLoggedIn ? <SignedIn /> : <SignedOut />

  
  return (
    <Container fluid>
    <Row>
      <Col xs={12} md={12}> 
        <Navbar className="brand" collapseOnSelect expand="md" bg="transparent">
          <Nav.Link href="/"> <div className="align-middle mr-3 img-wrapper"><Image src={Logo} rounded className="logo"/></div></Nav.Link>
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