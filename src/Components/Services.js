import React, {Component} from 'react';

import service from './Styling/Services.module.css'

class Services extends Component {

    render(){

        return(
            
            <div className={service.Contact_body}>
                <br></br>
                <h1>Design</h1>
                <div className={service.services}>
                        <ul className={service.services}>
                            <li>Both Hard and Soft gardening skills </li>
                        </ul>
                    </div>
                <h1>Install</h1>
                <div className={service.services}>
                        <ul className={service.services}>
                            <li>Planting - we are able to source the plants required and plant them. </li>
                            <li>Pruning - were experinced in timley pruning including fruit trees </li>
                            <li>Hedge Trimming</li>
                            <li>Lawn Care and Mowning</li>
                            <li>Regular or seasonal specialist maintance</li>
              
                        </ul>
                    </div>
                <h1>Maintain</h1>
                <div className={service.services}>
                        <ul className={service.services}>
                            <li>Both Hard and Soft gardening skills </li>
                            <li>Landscapeing</li>
              
                        </ul>
                    </div>

     
            </div>
            
        )
    }
}

// Garden maintenance - We can come for regularly scheduled visits in the year, where we can carry out timely pruning and cared treatment to keep and 

// we can come for regular or one off visits. 

// Planting - we are able to source the plants required and plant them. 

// Pruning - 

// Hedge Trimming

// Lawn Mowing


// Landscaping:

// Fencing

// Patios

// Ponds

// Garden Construction


// Design  

export default Services;