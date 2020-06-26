import React, {Component} from 'react';
import logo from './img/HB_logo.png'


class Navbar extends Component {
    render(){
        return (
            <nav>
            <div className="logoBtn">
              <a herf="#"><img src={logo} alt=""/>
              </a>
              <div className="btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul>
              <li><a herf="#">Home</a></li>
              <li><a herf="#">Pictures</a></li>
              <li><a herf="#">About</a></li>
              <li><a herf="#">Contact</a></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar;