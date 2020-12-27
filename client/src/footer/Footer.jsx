import React, {
    Component
} from "react";
import logo_HYF from '../logo_HYF.svg';
import logoVox from '../logoVox.png'
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

class Footer extends Component {
    state = {
        email: "mailto:voxbox@gmail.com",
        repoUrl: "https://github.com/gelilaa/VoxBox",
    };

    styles = {
        color: 'white'
    };

    render() {
        return ( 
            <div style = {{backgroundColor:'#397e6b', color:'white'}}className = "footer text-white  row p-2 fixed-bottom" >
            <div className = "col-md-8" >
            <ul style={{listStyleType: 'none'}}>
            <li className = "card-title">Contact VoxBox</li>
            <li><FaGithub /><a href = { this.state.repoUrl }  style={this.styles} > https://github.com/gelilaa/VoxBox </a></li>
            <li><BsEnvelope /><a href = { this.state.email }  style={this.styles} > voxbox@gmail.com </a></li>
            </ul></div > 
            <div className = "col-md-4" style = {{margin: 'auto 0'}}>
            <img src = {logoVox} style = {{height:'4em', width:'4em', borderRadius:'10px'}} 
            alt = "Voxbox logo" className='m-4'/>
            <img src = { logo_HYF } style = {{height:'5em', width:'5em'}} 
            alt = "HYF logo" /></div>
            </div >
        );
    }
}

export default Footer;