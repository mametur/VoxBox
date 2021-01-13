import React from 'react'
import { Container, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const SessionExp = (props) => {

  return (
    <Container style={{marginTop: '20px'}}>

      <Alert variant="warning">
          <Alert.Heading>Your session is expired!!</Alert.Heading>
        
          <hr />
          <p className="mb-0">
           Please login to continue contributiing our community
           <br></br>

           <Link to="/signin"><Button style={{marginTop: '20px', display: 'inline-block', color: 'white'}}>Login</Button></Link>
           
          </p>
      </Alert>
    </Container>
   
  )
}