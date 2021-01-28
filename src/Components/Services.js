import React, {Component} from 'react';
import ReactHover from 'react-hover';
import { AnimationWrapper } from 'react-hover-animation'

import service from './Styling/Services.module.css'




class Services extends Component {

    constructor(props) {
        super(props); 
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.state = {
            isHovering: false,
            
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        }
    }

    render(){

        return(
            
            <div className={service.Contact_body}>
                <br></br>
                <div className={service.design}>
                    <h1>Design Options</h1>
                    <div className={service.services} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <ul> Colaberation </ul>
                        <AnimationWrapper 
                        className='anitmation-wrapper' 
                        config={{
                            color: {
                                initial: 'blue',
                                onHover: 'red',
                            },
                            background: {
                                onHover: 'blue',
                            }
                        }}
                                >
                                <ul> { this.state.isHovering && 
                                    <ul className={service.services}>
                                    <li>We are happy to work with you to design a garden using our knowalge to help best design the garden for your use long term. Taking consideration multiple leves of maintince</li>
                                    <li>Both Hard and Soft gardening skills </li>
                                    <li>We have created a wide range of  </li>
                                    <li>We will work with you or via a consultation to design gardens of all types </li>
                                </ul> 
                            } </ul>
                        </AnimationWrapper>
                    </div>
                </div>
                <div className={service.services} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <ul> Formal Garden Design </ul>
                        <ul> { this.state.isHovering && 
                            <ul className={service.services}>
                                <li>Second list of info</li>
                            <li>Both Hard and Soft gardening skills </li>
                            <li>We have created a wide range of  </li>
                            <li>We will work with you or via a consultation to design gardens of all types </li>
                        </ul> 
                    } </ul>
                </div>
                <h1>Install</h1>
                <div className={service.services}>
                        <ul className={service.services}>
                            <li>Planting - we are able to source as plant a huge variety of options from plants upto trees </li>
                            <li>Pruning - were experinced in timley pruning including fruit trees </li>
                            <ul className={service.maint_list}>
                                <li>Hedge Trimming</li>
                                <li>Lawn Care, Seeding, Turfing or Mowning</li>
                                <li>Regular or seasonal specialist maintance</li>
                                <li>Herb gardens of vegtibals patches to fit in with the garden</li>
                            </ul>
                            <li></li>
                       
              
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