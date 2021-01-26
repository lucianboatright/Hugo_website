import React, { Component } from "react";
import ReactHover, { Trigger, Hover } from "react-hover";
import HoverComponent from "./HoverComponent";
import TriggerComponent from "./TriggerComponent";
import "./Styling/Services_style.css";
import "./Styling/Services_component.css";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
};

// import React, {Component} from 'react';
// import ReactHover, { Trigger, Hover} from 'react-hover';

// import service from './Styling/Services.module.css';


class Services extends Component {

    render(){

        return (
            <div className={"container"}>
              <div className={"title"}>
                {" "}
                React-hover
                <div className={"description"}>
                  <a href="https://github.com/cht8687/react-hover">Github</a>
                </div>
              </div>
              <div className={"main"}>
                <h2 className={"subtitle"}>
                  {" "}
                  Use custom components as trigger and hover{" "}
                </h2>
                <div className={"subcontainer"}>
                  <div className={"subleft"}>
                    <pre>
                      {`
                      <ReactHover
                        options={optionsCursorTrueWithMargin}>
                        <Trigger type='trigger'>
                          <TriggerComponent />
                        </Trigger>
                        <Hover type='hover>
                          <HoverComponent />
                        </Hover>
                        </ReactHover>`}
                    </pre>
                  </div>
                  <div className={"subright"}>
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <TriggerComponent />
                      </Trigger>
                      <Hover type="hover">
                        <HoverComponent />
                      </Hover>
                    </ReactHover>
                  </div>
                </div>
                <h2 className={"subtitle"}> Use HTML as trigger and hover </h2>
                <div className={"subcontainer"}>
                  <div className={"subleft"}>
                    <pre>
                      {`
                    <ReactHover
                    options={optionsCursorTrueWithMargin}>
                    <Trigger type='trigger'>
                      <h1 style={{ background: '#44B39D', width: '200px', fontSize: '1.5em', color: 'white' }}> <p>Hover on me</p></h1>
                    </Trigger>
                    <Hover type='hover'>
                      <div className={componentstyles.hover}>
                        <img className={componentstyles.thumbnail} alt="Albert Einstein" src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg" />
                        <blockquote className={componentstyles.quote}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
                        <p className={componentstyles.people}>--Albert Einstein</p>
                      </div>
                    </Hover>
                  </ReactHover>`}
                    </pre>
                  </div>
                  <div className={"subright"}>
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <h1
                          style={{
                            background: "#44B39D",
                            width: "200px",
                            fontSize: "1.5em",
                            color: "white"
                          }}
                        >
                          {" "}
                          <p>Hover on me</p>
                        </h1>
                      </Trigger>
                      <Hover type="hover">
                        <div className={"hover"}>
                          <img
                            className={"thumbnail"}
                            alt="Albert Einstein"
                            src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg"
                          />
                          <blockquote className={"quote"}>
                            {" "}
                            Two things are infinite: the universe and human stupidity;
                            and I'm not sure about the universe.{" "}
                          </blockquote>
                          <p className={"people"}>--Albert Einstein</p>
                        </div>
                      </Hover>
                    </ReactHover>
                  </div>
                </div>
              </div>
            </div>
          );

        // return(
            
        //     <div className={service.Contact_body}>
        //         <br></br>
        //         <h1>Design Options</h1>
        //         <div className='testLines'>
        //             <ReactHover options={optionCursorTrueWithMargin}>
        //                 <Trigger type='trigger'>
        //                     <TriggerComponent />
        //                 </Trigger>
        //                 <Hover type='hover'>
        //                     <HoverComponent />
        //                 </Hover>
        //             </ReactHover>
        //         </div>
        //         {/* <div className={service.services}>
        //                 <ul className={service.services}>
        //                     <li>We are happy to work with you to design a garden using our knowalge to help best design the garden for your use long term. Taking consideration multiple leves of maintince</li>
        //                     <li>Both Hard and Soft gardening skills </li>
        //                     <li>We have created a wide range of  </li>
        //                     <li>We will work with you or via a consultation to design gardens of all types </li>
        //                 </ul>
        //             </div>
        //         <h1>Install</h1>
        //         <div className={service.services}>
        //                 <ul className={service.services}>
        //                     <li>Planting - we are able to source as plant a huge variety of options from plants upto trees </li>
        //                     <li>Pruning - were experinced in timley pruning including fruit trees </li>
        //                     <ul className={service.maint_list}>
        //                         <li>Hedge Trimming</li>
        //                         <li>Lawn Care, Seeding, Turfing or Mowning</li>
        //                         <li>Regular or seasonal specialist maintance</li>
        //                         <li>Herb gardens of vegtibals patches to fit in with the garden</li>
        //                     </ul>
        //                     <li></li>
                       
              
        //                 </ul>
        //             </div>
        //         <h1>Maintain</h1>
        //         <div className={service.services}>
        //                 <ul className={service.services}>
        //                     <li>Both Hard and Soft gardening skills </li>
        //                     <li>Landscapeing</li>
              
        //                 </ul>
        //         </div> */}

     
        //     </div>
            
        // )
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