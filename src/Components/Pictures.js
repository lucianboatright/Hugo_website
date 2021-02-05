import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  './Styling/Pictures.module.css'

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
import image2 from './img/vertical-pallet-garden-grey-wall-lawn-creative-diy-succulents-decoration_copy.jpg'
import image3 from './img/6597098_orig_copy.jpg'
import image4 from './img/shale01garden.jpg'
import image5 from './img/roundgarden_1.jpg'

// import "./styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


class Pictures extends Component {
    state = {
        redirect: false
        }
        redirectHandler = () => {
            this.setState({ redirect: true })
            this.renderRedirect();
        }
        renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to='/Contacts' />
            }
    }


     render() {
         return (
            <div className="App">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={100000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div style={{ border: '2px solid black'}}><Link to='/AlderneyGarden'><img src={image1} style={{width:'400px', height:'350px'}} /><div className="imageButton">Click for more information</div></Link></div>
                    <div style={{ border: '2px solid black'}}><Link to='/WallGarden'><img src={image2} style={{width:'400px', height:'350px'}} /><div className="imageButton">Click for more information</div></Link></div>
                    <div style={{ border: '2px solid black'}}><Link to='/PaletGarden'><img src={image3} style={{width:'400px', height:'350px'}} /><div className="imageButton">Click for more information</div></Link></div>
                    <div style={{ border: '2px solid black'}}><Link to='/ShaleGarden'><img src={image4} style={{width:'400px', height:'350px'}} /><div className="imageButton">Click for more information</div></Link></div>
                    <div style={{ border: '2px solid black'}}><Link to='/LawnGarden'><img src={image5} style={{width:'400px', height:'350px'}} /><div className="imageButton">Click for more information</div></Link></div>
                </Carousel>
            </div>
         )
     }
    }
      

export default Pictures;