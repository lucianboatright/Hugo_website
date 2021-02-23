import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  './Styling/Pictures.module.css'

import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

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
              <div
                  style={{
                    paddingBottom: '30px',
                    position: 'relative'
                  }}
                >
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
                    renderDotsOutside="renderButtonGroupOutside"
                    >
                    <div ><Link to='/AlderneyGarden' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><img src={image1} alt=""  style={{width:'400px', height:'350px'}} /><div style={{padding: "10px"}} >Alderney Project <br></br> Complete Re-build </div></Link></div>
                    <div ><Link to='/WallGarden' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><img src={image2} alt=""  style={{width:'400px', height:'350px'}} /><div style={{padding: "10px"}} > Garden Instilations <br></br> Planting Ideas</div></Link></div>
                    <div ><Link to='/PaletGarden' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><img src={image3} alt=""  style={{width:'400px', height:'350px'}} /><div style={{padding: "10px"}} >Herb and Vegtable beds <br></br> More Information</div></Link></div>
                    <div ><Link to='/ShaleGarden' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><img src={image4} alt=""  style={{width:'400px', height:'350px'}} /><div style={{padding: "10px"}} > Partial Instilations <br></br>Patios, Hedges and Ponds</div></Link></div>
                    <div ><Link to='/LawnGarden' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><img src={image5} alt=""  style={{width:'400px', height:'350px'}} /><div style={{padding: "10px"}} >Mown Lawns and Hedge Trimming <br></br>Weekly Maintince</div></Link></div>
                </Carousel>
                </div>
            </div>
         )
     }
    }
      

export default Pictures;



