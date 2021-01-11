import React from "react";
import { useState } from 'react'
import logo_HYF from '../../logo_HYF.svg';
import logoVox from '../../assets/logoVox.png'
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {


    const [state, setState] = useState({
        email: "mailto:voxbox@gmail.com",
        repoUrl: "https://github.com/gelilaa/VoxBox",
        homePage: 'https://voxbox.herokuapp.com'
     });

        return ( 

            <div className = "footer-outer row text-center text-md-left" style={{backgroundColor: '#397e6b'}}>
            
            <div className = "col-4 " style={{backgroundColor: '#397e6b'}}>
            <ul className='footer-list' style={{paddingTop:'20px'}}>
            <li ><a href = { state.homePage } >VoxBox</a></li>
            <li><a href = { state.repoUrl } > <FaGithub /> </a></li>
            <li><a href = { state.email } > <BsEnvelope /> </a></li>
            </ul>
            </div> 

            <div className = "col-4 " style={{backgroundColor: '#397e6b'}}>
            <ul className='footer-list' style={{paddingTop:'20px'}}>
            <li> Copyright © 2020 </li>
            </ul>
            </div>

            <div className = "col-4 " style={{textAlign:'right', backgroundColor: '#397e6b'}}>
            <ul className='footer-list apart'>
            <li><img src = {logoVox} alt = "Voxbox logo" className='rounded'/></li>
            <li ><img src = {logo_HYF} alt = "HYF logo" /></li>
            </ul>
            </div>

            </div>
        );
};

export default Footer;