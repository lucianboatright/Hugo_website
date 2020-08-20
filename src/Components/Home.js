import React, {Component} from 'react';

import home from "./Styling/Home.module.css"

import logo from  './img/HugoLogo.png'

class Home extends Component {

    render(){

        return(
            <div className={home}>
                <div className={home.text}>
                    <h1>Welcome to HB Gardens and Landscapes</h1>
                </div>
                <div className={home.logo}>
                    <img src={logo} alt=""/>

                </div>
  
            </div>
        )
    }
}

export default Home;