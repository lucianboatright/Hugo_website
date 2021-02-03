import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import React from "react";
import ReactDOM from "react-dom";
import Carousel, { consts } from "react-elastic-carousel";
import Item from "./Item";
import  './Styling/Pictures.module.css'

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
// import "./styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
];



class Pictures extends Component {

     render() {
         return (
            <div className="App">
                <Carousel className="styling-example" breakPoints={breakPoints}>
                <Item> <Link  to="/Contact" >  Alderney Project<img src={image1} alt=""/> </Link></Item>
                <Item>Bristol House</Item>
                <Item>London House</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
                <Item>8</Item>
                </Carousel>
            </div>
         )
     }
    }
      

export default Pictures;