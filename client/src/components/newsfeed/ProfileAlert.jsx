import React from 'react'
import { Container, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProfileAlert = (props) => {

  const user_id = useSelector(state => state.user.user_id)

  return (
    <Container style={{marginTop: '20px'}}>

      <Alert variant="warning">
          <Alert.Heading>New in VoxBox?</Alert.Heading>
          <p>
            Thank you for singing up and joining our great community!
          </p>
          <hr />
          <p className="mb-0">
           Please complete your profile by clicking edit button on your profile page and let us know more about you before you post a help request!
           <br></br>

           <Link to={`/profile/${user_id}`}><Button style={{marginTop: '20px', display: 'inline-block', color: 'white'}}>Go to your profile</Button></Link>
           <Button style={{backgroundColor: 'gray', color: 'white', display: 'inline-block', marginTop: '20px', marginLeft: '10px'}} onClick={props.formToggle} >Cancel</Button>
          </p>
      </Alert>
    </Container>
   
  )
}