import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './About.css'

import RHSlogo from './img/rhs-qualified.svg'
import InstHauto from './img/chart_logo.png'

class About extends Component {

    render(){

        return(
            <>
            <div className="about-container">
                <div className="about_body">
                    <h1>Bristol based lans scape gardener</h1>
                    
                </div>
                
                <div className="gardenLogos">
                    <div className="RHS_logo">
                        <Link to="https://www.horticulture.org.uk/"><img src={RHSlogo} alt="" /></Link>
                    </div>
                    <div className="hort_logo">
                        <Link to="https://www.rhs.org.uk/advice/profile?pid=403"><img src={InstHauto} alt="" /></Link>
                    </div>
                </div>
            </div>
            </>
        
        )
    }
}

export default About;