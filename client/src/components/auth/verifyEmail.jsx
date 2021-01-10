import React from 'react'
import { useState, useEffect} from 'react'
import { Form, Button, Container, Row, Col, Alert,Toast} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


//by clicking a link in the email , user is asked to reset their email and verify it

const VerifyEmail =(props)=>{
  
const token = props.location.search;

  const [state, setState] = useState({
    token:token,
    password: '',
   confirmPassword:'',
  })
  
   const [passwordErrors, setPassworderrors] = useState();
   const [passwordcorrect ,setPasswordcorrect]= useState();


   const handleChange = (event)=>{
     
    setState({
      ...state,
      [event.target.id]: event.target.value
       
    })
    

}

  const onLoad=(event)=>{
        event.preventDefault()
         const newPassword= state

       if (newPassword.password !== newPassword.confirmPassword) {
       const error = 'Passwords does not  match!'
        setPassworderrors(error)
       // window.location.reload(false)
        return;
       }if(newPassword.password === '' || newPassword.confirmPassword === ''){
           const error2 = 'both fields are requiered'
            setPassworderrors(error2)
          //  window.location.reload(false)
            return;
       }if(newPassword.password.length < 5 ||newPassword.password.length > 15 ){
           const error3= 'Password length has to be between 5 and 15 characters';
           setPassworderrors(error3)
          // window.location.reload(false)
           return;
       }
    

  
     
        
 const data= {...state}
 
 

   fetch("/api/update_password",{
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             body: JSON.stringify(data),
          },
          body: JSON.stringify(data),
      })
       .then(response => response.json())
       
      .then(data => {
       console.log(data);
      
        if(!data){
            console.log('error:', data)
            setPassworderrors(data.message)
            
        }else{
           alert(data.message);
           setPasswordcorrect(true)
            
        }
    }).catch((error) => {
        console.error('Error:', error);
       
      });
     
 
   
  }
  useEffect(() => {
        console.log("state now:",state)
        console.log ('token', token)
    }, [])
  const style = {
    boxShadow: '2px 2px 10px 2px #F2F2F2',
    borderRadius: '10px', 
    padding: '25px', 
    maxWidth: '400px',
    height: '370px',
    marginBottom: '6%',
    marginTop: '6%'
  }
  if(passwordcorrect) return (<Redirect to="/signin" />)
  return(
    <Container style={style} className="justify-content-center"> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
    <h2 className="text-primary row justify-content-center">Reset Password</h2>
      <Form>
      <Form.Group><Form.Control type="password" placeholder="New password" id="password" onChange={handleChange} required/></Form.Group>
      <Form.Group><Form.Control type="password"  placeholder="confirm-Password" id="confirmPassword" onChange={handleChange} required/></Form.Group>
       {(passwordErrors)? <Alert variant="danger">{passwordErrors}</Alert> : null}
       {(passwordcorrect)? <Alert variant="primary"> Please sign in!</Alert> : null}
      
      <Form.Group >
        

      <Button style={{marginTop: '50px'}} variant="primary" type="submit" block onClick={onLoad} >
            Reset Password
        </Button>
      </Form.Group>
     
    </Form>
    </Col>
    </Row>
  </Container>
   
   
  )};

export default VerifyEmail