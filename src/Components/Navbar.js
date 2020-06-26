import React, {Component} from 'react';
import logo from './img/HB_logo.png'
import "./Navbar.css"


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
                    <a herf="#"><img src={logo} alt=""/></a>
                </div>

              <div className="btn" onClick={this.menuClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>

            <ul className={this.state.isOpen ? "showNav" : "undefined" }>
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