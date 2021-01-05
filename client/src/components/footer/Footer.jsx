import React from "react";
import { useState } from 'react'
import logo_HYF from '../../logo_HYF.svg';
import logoVox from '../../assets/logoVox.png'
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Redirect } from "react-router-dom";

function Footer() {


     const [state, setState] = useState({
        email: "mailto:voxbox@gmail.com",
        repoUrl: "https://github.com/gelilaa/VoxBox",
     });

        return ( 

            <div style = {{backgroundColor:'#397e6b', width: '100%', marginTop: 'auto'}} className = "footer text-white row p-2 text-center text-md-left" >
            <div className = "col-md-10" style={{paddingLeft:"50px"}}>
            <ul style={{listStyleType: 'none'}}>
            <li className='mb-4 font-weight-bold'>Contact VoxBox</li>
            <li><FaGithub /><a href = { state.repoUrl } className = "text-white" > https://github.com/gelilaa/VoxBox </a></li>
            <li><BsEnvelope /><a href = { state.email } className = "text-white" > info.voxbox@gmail.com </a></li>
            </ul>
            </div> 

            <div className = "col-md-2 m-auto-0 me-n1">
            <img src = {logoVox} style = {{height:'4em', width:'4em'}} 
            alt = "Voxbox logo" className='m-4 rounded'/>
            <img src = {logo_HYF} style = {{height:'5em', width:'5em'}} 
            alt = "HYF logo" /></div>
            </div >
        );
};

export default Footer;