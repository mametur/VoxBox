import React from "react";
import { useState } from 'react'
import logo_HYF from '../../logo_HYF.svg';
import logoVox from '../../assets/logoVox.png'
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {Image, Row, Col, Button, Container} from "react-bootstrap"
import './Footer.css';

function Footer() {


    const [state, setState] = useState({
        email: "mailto:voxbox@gmail.com",
        repoUrl: "https://github.com/gelilaa/VoxBox",
        hyfUrl: "https://hackyourfuture.be",
        homePage: 'https://voxbox.herokuapp.com'
     });

        return ( 
            <Container fluid style={{backgroundColor: '#397e6b'}}>
            <footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
						<Col  xs={12} sm={5}>
                        <ul className="footer-list">
             <li ><a href = { state.homePage } >VoxBox</a></li>
             <li><a href = { state.repoUrl } > <FaGithub /> </a></li>
             <li><a href = { state.email } > <BsEnvelope /> </a></li>
            </ul>
            </Col>
            <Col  xs={12} sm={5}><ul className='footer-list'>
            <li> Copyright © 2020 </li>
            </ul></Col>
            <Col xs={12} sm={5}><ul className='footer-list'>
            <li><img src = {logoVox} alt = "Voxbox logo" className='rounded'/></li>
            <li><a href = { state.hyfUrl } ><img src = {logo_HYF} alt = "HYF logo" /></a></li>
            </ul></Col>
						</div>
					</div>
				</footer>
</Container>
            // <div className = "footer-outer row text-center text-md-left" style={{backgroundColor: '#397e6b'}}>
            
            // <div className = "col-4 " style={{backgroundColor: '#397e6b'}}>
            // <ul className='footer-list' style={{paddingTop:'20px'}}>
            // <li ><a href = { state.homePage } >VoxBox</a></li>
            // <li><a href = { state.repoUrl } > <FaGithub /> </a></li>
            // <li><a href = { state.email } > <BsEnvelope /> </a></li>
            // </ul>
            // </div> 

            // <div className = "col-4 " style={{textAlign:'center',backgroundColor: '#397e6b'}}>
            // <ul className='footer-list' style={{paddingTop:'20px'}}>
            // <li> Copyright © 2020 </li>
            // </ul>
            // </div>

            // <div className = "col-4 " style={{textAlign:'right', backgroundColor: '#397e6b'}}>
            // <ul className='footer-list apart'>
            // <li><img src = {logoVox} alt = "Voxbox logo" className='rounded'/></li>
            // <li><a href = { state.hyfUrl } ><img src = {logo_HYF} alt = "HYF logo" /></a></li>
            // </ul>
            // </div>

            // </div>
        );
};

export default Footer;