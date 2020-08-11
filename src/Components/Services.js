import React, {Component} from 'react';

import service from './Styling/Services.module.css'

class Services extends Component {

    render(){

        return(
            
            <div className={service.Contact_body}>
                <br></br>
                <h1>Services</h1>
                <div className={service.services}>
                        <ul className={service.services}>
                            <li>Both Hard and Soft gardening skills </li>
                            <li>Landscapeing</li>
                            <li>Paties</li>
                            <li>Gardening</li>
                            <li>Planting and potting</li>
                            <li>Design Installation and Maintinance</li>
                        </ul>
                    </div>

     
            </div>
            
        )
    }
}

export default Services;