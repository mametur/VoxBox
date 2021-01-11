import React from 'react'
import { useState } from 'react'
import { Form, Button, Container, Row, Col, Alert} from 'react-bootstrap'


// user askes to reset its password by entering their email

const ForgotPassword =(props)=>{
       
    const [state, setState] = useState({
    email: ''
   
  })
   const [emailErrors, setEmailerrors] = useState();

   const [success,setSuccess]= useState();

   
  const handleChange = (event)=>{
     
    setState({
      
    email: event.target.value
     
    })
  
     
  }

  const onSubmit=(event)=>{
        event.preventDefault()
     
        
   const data = {...state};

   fetch('/api/forgot',{
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
       .then(response => response.json())
      .then(data => {
        if(!data || data.error){
            console.log('error:', data)
              setEmailerrors(data.error);

        }else{
            console.log('not error')
            setSuccess(true)
            setEmailerrors(null)

        }
    }).catch((error) => {
        console.error('Error:', error);
       
      });
     
//  if(success) return (Alert('we have sent you an email !')

//  )
// console.log("event-target",event.target)
// console.log("state",data.email)


  }
  const style = {
    boxShadow: '2px 2px 10px 2px #F2F2F2',
    borderRadius: '10px', 
    padding: '25px', 
    maxWidth: '400px',
    height: '370px',
    marginBottom: '6%',
    marginTop: '6%'
  }
  return(
     <Container style={style} className="justify-content-center"> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
    <h2 className="text-primary row justify-content-center">Forgot Password</h2>
      <Form>
          <p style={{color:'#397e6b'}}> Please enter your email address below and we will send you information to change your password. </p>
      <Form.Group><Form.Control type="email" placeholder="Email" id="email" onChange={handleChange} /></Form.Group>
      
      <Form.Group >
             {(emailErrors)? <Alert variant="danger">{emailErrors}</Alert> : null}
              {(success)? <Alert variant="success"> Your Password reset email has been sent !</Alert> : null}
      <Button style={{marginTop: '50px'}} variant="primary" type="submit" block onClick={onSubmit}  >
           Submit
        </Button>
      </Form.Group>

    </Form>
    </Col>
    </Row>
  </Container>
  )

};

export default ForgotPassword