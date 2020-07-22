import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import emailLogo from './img/Email_logo.png'
import phoneLogo from './img/Phone_logo.png'
import whatsAppLogo from './img/whatsapp.jpg'

import './Styling/Contact.css'

class Contact extends Component {

    render(){

        return(
            <>
            <div className="Contact_body">
                <br></br>
                <h1>Contact Details</h1>
                <br></br>
                <h2>Please Contact HB Gardening using the details below of fill out he box below and send</h2>
                <h2>second line</h2>
                <div className="contactinfo">
                        <div className="emailcontact">
                            <ul><Link to="/Contact"><img src={emailLogo} alt=""/></Link><div className="contactName">Hugo.Boatright@gmail.com</div></ul>
                        </div>
                        <div className="phonecontact">
                            <ul><Link to="/Contact"><img src={phoneLogo} alt=""/></Link><div className="contactPhone">077895785400 - (Please leave a message)</div></ul>
                        </div>
                        {/* <div className="whatsappontact">
                            <ul><Link to="/Contact"><img src={whatsAppLogo} alt=""/></Link><div className="whatsappontact">077895785400</div></ul>
                        </div> */}
                    </div>
            </div>
            </>
        )
    }
}

export default Contact;