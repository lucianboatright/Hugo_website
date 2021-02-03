import React, { Component } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  './Styling/Pictures.module.css'

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
import image2 from './img/vertical-pallet-garden-grey-wall-lawn-creative-diy-succulents-decoration_copy.jpg'
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

     render() {
         return (
            <div className="App">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
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
                    <div><img src={image1} /></div>
                    <div><img src={image2} /></div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>
         )
     }
    }
      

export default Pictures;