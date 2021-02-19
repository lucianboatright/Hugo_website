import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { makeStyles } from '@material-ui/core/styles';

import alderneyStyle from "./Styling/AlderneyGarden.module.css"

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
import image2 from './img/IMG-20201214-WA0005(1)_copy.jpg'
import image3 from './img/IMG-20210105-WA0007(1)_copy.jpg'
import image4 from './img/IMG-20210129-WA0000.jpg'
import image5 from './img/IMG-20210129-WA0001.jpg'
import image6 from './img/IMG-20210129-WA0002.jpg'
import image7 from './img/IMG-20210129-WA0003.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  description: {
    
    margin: 'auto',
  },

}));

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
          <div         
            style={{
              paddingBottom: '30px',
              position: 'relative'
              }} >
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
                renderDotsOutside="renderButtonGroupOutside"
            >
                <div><img src={image1} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image5} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image6} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image7} alt=""  style={{width:'400px', height:'350px'}} /></div>
        </Carousel>
        <div className={alderneyStyle.description}>This garden was a great oppertunity for me to design and build for a client who wanted a complete change. 
          The garden is a family garden though it is mainly designed around the parents who live there.
          As you can see from the images the garden had a lot of untamed growth leading to a lot of lost space. 
          There was a drive to keep and imporve certain parts of the garden like the herb bed and the area at the end of the 
          garden for relaxing and socialising. I also had the oppertunity to install pond to help suport wildlife and a fire pit for evening entertainment.  </div>


        </div>
        
        
        );
    };
}
    
export default AlderneyGarden;