import React, {Component} from 'react';
import logo from './img/HB_logo.png'
import "./Navbar.css"

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
            <nav>
            <div className="logoBtn">

                <div className="logo">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

              <div className="btn" onClick={this.menuClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>

            <ul className={this.state.isOpen ? "showNav" : "undefined" }>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Pictures">Pictures</Link></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar;