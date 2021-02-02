// import React, {Component} from 'react';
// // import ReactHover from 'react-hover';
// // import { AnimationWrapper } from 'react-hover-animation'
// import { useHover } from 'react-hover-animation'


// const {spring, animated, setHover} = useHover ({
//     color: {
//         initial: 'blue',
//         onHover: 'red',
//     },
//     animationConfig: {
//         duration: 500,
//     },
// })
// class Services extends Component {

//     // constructor(props) {
//     //     super(props); 
//     //     this.handleMouseHover = this.handleMouseHover.bind(this)
//     //     this.state = {
//     //         isHovering: false,
            
//     //     };
//     // }

//     // handleMouseHover() {
//     //     this.setState(this.toggleHoverState);
//     // }

//     // toggleHoverState(state) {
//     //     return {
//     //         isHovering: !state.isHovering,
//     //     }

  



//     render(){

 
//         return(
            
//             <div className={service.Contact_body}>
//                 <br></br>
//                 <div className={service.design}>
//                     <h1>Design Options</h1>
//                     <div className={service.services}>
//                         <ul> Colaberation </ul>
//                         <animated.h1
//                         // className='anitmation-wrapper' 
                        
//                         style={spring}
                        

//                         onPointerOver={() => {
//                             setHover(true)
//                         }}
//                         onPointerOut={() => {
//                             setHover(false)
//                         }}
//                         // config={{
//                         //     color: {
//                         //         initial: 'blue',
//                         //         onHover: 'red',
//                         //     },
//                         //     background: {
//                         //         onHover: 'blue',
//                         //     }
//                         // }}
    
//                         >
//                             <ul className={service.services}>
//                                 <li>We are happy to work with you to design a garden using our knowalge to help best design the garden for your use long term. Taking consideration multiple leves of maintince</li>
//                                 <li>Both Hard and Soft gardening skills </li>
//                                 <li>We have created a wide range of  </li>
//                                 <li>We will work with you or via a consultation to design gardens of all types </li>
//                             </ul> 
                       
//                         </animated.h1>
//                     </div>
//                 </div>
//                 <div className={service.services} >
//                     <ul> Formal Garden Design </ul>
//                     {/* <AnimationWrapper 
//                         className='anitmation-wrapper' 
//                         config={{
//                             color: {
//                                 initial: 'blue',
//                                 onHover: 'red',
//                             },
//                             background: {
//                                 onHover: 'blue',
//                             }
//                         }}>
                     
//                             <ul className={service.services}>
//                                 <li>Second list of info</li>
//                             <li>Both Hard and Soft gardening skills </li>
//                             <li>We have created a wide range of  </li>
//                             <li>We will work with you or via a consultation to design gardens of all types </li>
//                         </ul> 
                   
//                     </AnimationWrapper> */}
//                 </div>
//                 <h1>Install</h1>
//                 <div className={service.services}>
//                         <ul className={service.services}>
//                             <li>Planting - we are able to source as plant a huge variety of options from plants upto trees </li>
//                             <li>Pruning - were experinced in timley pruning including fruit trees </li>
//                             <ul className={service.maint_list}>
//                                 <li>Hedge Trimming</li>
//                                 <li>Lawn Care, Seeding, Turfing or Mowning</li>
//                                 <li>Regular or seasonal specialist maintance</li>
//                                 <li>Herb gardens of vegtibals patches to fit in with the garden</li>
//                             </ul>
//                             <li></li>
                       
              
//                         </ul>
//                     </div>
//                 <h1>Maintain</h1>
//                 <div className={service.services}>
//                         <ul className={service.services}>
//                             <li>Both Hard and Soft gardening skills </li>
//                             <li>Landscapeing</li>
              
//                         </ul>
//                 </div>

     
//             </div>
            
//         )
//     }
// }

// // Garden maintenance - We can come for regularly scheduled visits in the year, where we can carry out timely pruning and cared treatment to keep and 

// // we can come for regular or one off visits. 

// // Planting - we are able to source the plants required and plant them. 

// // Pruning - 

// // Hedge Trimming

// // Lawn Mowing


// // Landscaping:

// // Fencing

// // Patios

// // Ponds

// // Garden Construction


// // Design  

// export default Services;


import { Container, Row, Col } from 'react-grid-system';
import service from './Styling/Services.module.css'
import React from 'react'
import { useHover } from 'react-hover-animation'

// import { Visible, Hidden } from 'react-grid-system';
 
const Services = () => {
  /* 
    first call the hook
  */
  const { spring, animated, setHover } = useHover({
    /* 
    optional styles...
    */
    color: {
      initial: 'rgb(43, 85, 79)',
      onHover: 'rgb(223, 116, 87)',
    },
    /* 
    animation config using an object 
    */
    animationConfig: {
      duration: 1000,
    },

    /* 
    animation config using a preset
    */
    /* 
    animationConfig: 'molasses',
    */
  })
  return (
    /* 
    add 'animated' to the element
    */
   <>
   
    <Row>
        <Col sm={4}>
            <div className={service.designHeader}>
                <h1>Design Options</h1>
            </div>
            <div className={service.designHeader}>
                <h2>Custom Design</h2>
            </div>
            <div>
                <ul className={service.designList}>
                    <li>We are happy to work with you to design a garden using our knowalge to help best design the garden for your use long term. <br></br>  Taking consideration multiple leves of maintince</li>
                    <li>Both Hard and Soft gardening skills </li>
                    <li>We have created a wide range of  </li>
                    <li>We will work with you or via a consultation to design gardens of all types </li>
                </ul> 
            </div>
            <div className={service.designHeader}>
                <h2>Maintain </h2>
            </div>
            <div>
                <ul className={service.designList}>
                    <li>We are happy to work with you to design a garden using our knowalge to help best design the garden for your use long term. <br></br>Taking consideration multiple leves of maintince</li>
                    <li>Both Hard and Soft gardening skills </li>
                    <li>We have created a wide range of  </li>
                    <li>We will work with you or via a consultation to design gardens of all types </li>
                </ul> 
            </div>
            <div className={service.designHeader}>
                <h2>Install</h2>
            </div>
            <div>
                <ul className={service.designList}>
                <li>Hedge Trimming</li>
                    <li>Lawn Care, Seeding, Turfing or Mowning</li>
                    <li>Regular or seasonal specialist maintance</li>
                    <li>Herb gardens of vegtibals patches to fit in with the garden</li>
                </ul> 
            </div>
        </Col>

        <Col sm={4}>
         
        </Col>


        <Col sm={4}>
            <Container>
                <Row>
                    <Col> </Col>
                    <Col> Prices</Col>
                    <Col> </Col>
                </Row>
            </Container>
            <div className="themed-container">
            <Container >
                <Row className="rows">
                    <Col md={6} debug>Price per hour <br></br> Standard work</Col>
                    <Col md={6} debug> £ x</Col>
                    {/* <Col className="column" > Price per hour <br></br> Standard work</Col>
                    <Col className="column"> £ X</Col> */}
                </Row>
                <Row>
                    <Col> Price per hour <br></br> Specialist work</Col>
                    <Col> £ Y</Col>
                </Row>
                <Row>
                    <Col> Weekly or Montly servises </Col>
                    <Col> Prices on request </Col>
                </Row>
                <Row>
                    <Col> Custom Design </Col>
                    <Col> We dont charge until work starts so feel free to call.  </Col>
                </Row>
            </Container>
            </div>
    
        </Col>
    </Row>
    </>
    
  )
}
export default Services