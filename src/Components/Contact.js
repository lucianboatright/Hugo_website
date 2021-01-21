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
            <div className="Contact_body_main">
                <div className="contact_main_text">
                <br></br>
                <h1>Contact Details</h1>
                <br></br>
                <h2>We would love to hear from you, please get in touch</h2>
                <h2></h2>
                </div>
                <div className="contactinfobody">
                        <div className="emailcontactbody">
                            {/* <Link to="/Contact"><img src={emailLogo} alt=""/></Link>
                            <div className="contactNamebody">Hugo.Boatright@gmail.com</div> */}
                            <Link className={"emailcontactbody"} to="/Contact"><img src={emailLogo} alt="" /><div className="contactNamebody"></div></Link>

                            {/* <Link className={navbar.contactLink} to="/Contact" ><img src={emailLogo} alt=""/><div className="contactName">    Hugo.Boatright@gmail.com</div></Link> */}
                        </div>
                        <div className="phonecontactbody">
                            <Link to="/Contact"><img src={phoneLogo} alt=""/></Link>
                            <div className="contactPhonebody">07895785400 - (Please leave a message)</div>
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