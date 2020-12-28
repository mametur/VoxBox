import React from "react";
import { useState } from 'react'
import logo_HYF from '../../logo_HYF.svg';
import logoVox from '../../assets/logoVox.png'
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function Footer() {

     const [state, setState] = useState({
        email: "mailto:voxbox@gmail.com",
        repoUrl: "https://github.com/gelilaa/VoxBox",
     });

        return ( 
            <div style = {{backgroundColor:'#397e6b', color:'white'}} className = "footer text-white  row p-2" >
            <div className = "col-md-8" >
            <ul style={{listStyleType: 'none'}}>
            <li style={{fontWeight: 'bold', marginBottom: 5}}>Contact VoxBox</li>
            <li><FaGithub /><a href = { state.repoUrl }  style={{color:'white'}} > https://github.com/gelilaa/VoxBox </a></li>
            <li><BsEnvelope /><a href = { state.email }  style={{color:'white'}} > voxbox@gmail.com </a></li>
            </ul></div > 
            <div className = "col-md-4" style={{margin: 'auto 0'}}>
            <img src = {logoVox} style = {{height:'4em', width:'4em', borderRadius:'10px'}} 
            alt = "Voxbox logo" className='m-4'/>
            <img src = { logo_HYF } style = {{height:'5em', width:'5em'}} 
            alt = "HYF logo" /></div>
            </div >
        );
};

export default Footer;