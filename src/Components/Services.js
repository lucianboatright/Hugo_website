import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import emailLogo from './img/Email_logo.png'
import phoneLogo from './img/Phone_logo.png'
import whatsAppLogo from './img/whatsapp.jpg'

import './Styling/Contact.css'

class Services extends Component {

    render(){

        return(
            <>
            <div className="Contact_body">
                <br></br>
                <h1>Services</h1>
                <div className="services">
                        <ul className="services">
                            <li>Both Hard and Soft gardening</li>
                            <li>Lanscaping</li>
                            <li>Patios</li>
                            <li>Gardening</li>
                            <li>Design Installation and Maintinance</li>
                        </ul>
                    </div>

     
            </div>
            </>
        )
    }
}

export default Services;