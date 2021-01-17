
import './Backlink.css';
import React from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs';
import {Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'


const Backlink = () => {

  const history = useHistory()

return (
  <p className="backlink"><Button style={{width:"100px"}} onClick={()=> history.goBack()}><BsArrowReturnLeft/></Button></p>
);
};

export default Backlink;