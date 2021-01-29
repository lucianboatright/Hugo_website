import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Styling/Pictures.module.css'

// import image1 from './ImageGallery/IMG-20201214-WA0000(1).jpg'


// import ImageGallery from '../src/ImagrGallery';

class Pictures extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={'./ImageGallery/IMG-20201214-WA0000(1).jpg'} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Pictures;