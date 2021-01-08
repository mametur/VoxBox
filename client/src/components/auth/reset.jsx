import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col, Alert} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


const Reset = (props) => {
    const id = props.match.params;
    const [state, setState] = useState({
    id: id.id,
    password: '',
   confirmPassword:''
   
   
  })

   const [passwordErrors, setPassworderrors] = useState();

   const [passwordcorrect ,setPasswordcorrect]= useState();

  
   const handleChange = (event)=>{
     
    setState({
      ...state,
      [event.target.id]: event.target.value
       
    })
    

}
 
  
  const onSubmit=(event)=>{
        event.preventDefault()
         const newPassword= state

       if (newPassword.password !== newPassword.confirmPassword) {
       const error = 'Passwords does not  match!'
        setPassworderrors(error)
       }if(newPassword.password === '' || newPassword.confirmPassword === ''){
           const error2 = 'both fields are requiered'
            setPassworderrors(error2)
       }
    

    console.log(state)

 
  

   fetch(`/api/reset/${id.id}`,{
        method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPassword.password),
      })
       .then(response => response.json())
      .then(data => {
          
        if(!data || data.error){
            console.log('error:', data)
             setPassworderrors(data.error);
   console.log(data);
        }
        //else{
        //     console.log('not error')
        //      setPasswordcorrect(true)
        // }
    }).catch((error) => {
        console.error('Error:', error);
       
      });


 }
// useEffect(() => {
//     console.log(id.id)
//     console.log(state)
   
    
// }, [])


 
  
  const style = {
    boxShadow: '2px 2px 10px 2px #F2F2F2',
    borderRadius: '10px', 
    padding: '25px', 
    maxWidth: '400px',
    height: '370px',
    marginBottom: '6%',
    marginTop: '6%'
  }



  return (
     <Container style={style} className="justify-content-center"> 
    <Row className="justify-content-center">
    <Col xs sm md lg xl>
    <h2 className="text-primary row justify-content-center">Reset Password</h2>
      <Form>
      <Form.Group><Form.Control type="password" placeholder="New password" id="password" onChange={handleChange} required/></Form.Group>
      <Form.Group><Form.Control type="password"  placeholder="confirm-Password" id="confirmPassword" onChange={handleChange} required/></Form.Group>
       {(passwordErrors)? <Alert variant="danger">{passwordErrors}</Alert> : null}
       {(passwordcorrect)? <Alert variant="primary">Please sign in!</Alert> : null}
      
      <Form.Group >
        

      <Button style={{marginTop: '50px'}} variant="primary" type="submit" block onClick={onSubmit} >
            Reset Password
        </Button>
      </Form.Group>
     
    </Form>
    </Col>
    </Row>
  </Container>
   
   
  )
}

export default Reset