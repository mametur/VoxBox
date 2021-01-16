
import './Backlink.css';
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs';
import {Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'


const Backlink = () => {

  const history = useHistory()

return (
  <p className="backlink"><Button onClick={()=> history.goBack()}><BsChevronLeft /> Back</Button></p>
);
};

export default Backlink;