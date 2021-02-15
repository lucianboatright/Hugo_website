import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from './img/vertical-pallet-garden-grey-wall-lawn-creative-diy-succulents-decoration_copy.jpg'
import image2 from './img/vertical-white-pallet-flower-garden-stone-decorated copy.jpg'
import image3 from './img/very-happy-with-how-this-pallet-herb-garden-turned-out. copy.jpg'
import image4 from './img/IMG-20210129-WA0000.jpg'
import image5 from './img/IMG-20210129-WA0001.jpg'
import image6 from './img/IMG-20210129-WA0002.jpg'
import image7 from './img/IMG-20210129-WA0003.jpg'




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

class WallGarden extends Component {
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
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div><img src={image1} alt="" style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image5} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image6} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image7} alt=""  style={{width:'400px', height:'350px'}} /></div>
        </Carousel>
        );
    };
}
    
export default WallGarden;