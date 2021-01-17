
import './Backlink.css';
import React from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs';
import {Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'


const Backlink = () => {

  const history = useHistory()

return (
  <div className="backlink"><Button variant="outline-primary" style={{width:"75px"}} onClick={()=> history.goBack()}><BsArrowReturnLeft/></Button></div>
);
};

export default Backlink;