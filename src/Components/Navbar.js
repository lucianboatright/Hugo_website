import React, {Component} from 'react';
import logo from './img/HugoLogo.png'
import emailLogo from './img/Email_logo.png'
import phoneLogo from './img/Phone_logo.png'
import navbar from "./Styling/Navbar.module.css"

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
                <div className={navbar.logoBtn}>

                    <div className={navbar.logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={navbar.contactinfo}>
                        <div className={navbar.emailcontact}>
                            <ul><Link to="/Contact"><img src={emailLogo} alt=""/></Link><div className="contactName">Hugo.Boatright@gmail.com</div></ul>
                        </div>
                        <div className={navbar.phonecontact}>
                            <ul><Link to="/Contact"><img src={phoneLogo} alt=""/></Link><div className="contactPhone">077895785400 - (Please leave a message)</div></ul>
                        </div>
                    </div>

                    <div className={navbar.btn} onClick={this.menuClick}>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                    </div>
                </div>
                <div className={navbar.page_link}>
                    <ul className={this.state.isOpen ? "${navbar.showNav}" : "${navbar.undefined}" }>
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