import React, {Component} from 'react';
import logo from './img/HugoLogo.png'
import emailLogo from './img/Email_logo.png'
import phoneLogo from './img/Phone_logo.png'
import "./Styling/Navbar.module.css"

import {Link} from 'react-router-dom'

class Navbar extends Component {

    state={
        isOpen: false,
    }

    menuClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    



    render(){
        return (
            <nav className="navbar">
                <div className="logoBtn">

                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="contactinfo">
                        <div className="emailcontact">
                            <ul><Link to="/Contact"><img src={emailLogo} alt=""/></Link><div className="contactName">Hugo.Boatright@gmail.com</div></ul>
                        </div>
                        <div className="phonecontact">
                            <ul><Link to="/Contact"><img src={phoneLogo} alt=""/></Link><div className="contactPhone">077895785400 - (Please leave a message)</div></ul>
                        </div>
                    </div>

                    <div className="btn" onClick={this.menuClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="page_link">
                    <ul className={this.state.isOpen ? "showNav" : "undefined" }>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        {/* <li><Link to="/Pictures">Pictures</Link></li> */}
                    </ul>
                </div>
          </nav>
        )
    }
}

export default Navbar;