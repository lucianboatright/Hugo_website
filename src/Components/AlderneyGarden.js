import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
import image2 from './img/IMG-20201214-WA0005(1)_copy.jpg'
import image3 from './img/IMG-20210105-WA0007(1)_copy.jpg'




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

class AlderneyGarden extends Component {
     render() {   
    return (
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div><img src={image1} style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image2} style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image3} style={{width:'400px', height:'350px'}} /></div>
        </Carousel>
        );
    };
}
    
export default AlderneyGarden;