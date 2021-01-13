import React, { useEffect, useState } from 'react';
import './Backlink.css';
import { BsChevronLeft } from 'react-icons/bs';
import {Link} from 'react-router-dom';


const Backlink = () => {

return (
  <p className="backlink"><Link to ='/newsfeed'><BsChevronLeft /> Back to All Help Requests</Link></p>
);
};

export default Backlink;