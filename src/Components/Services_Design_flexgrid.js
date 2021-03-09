import React, { Component } from 'react';


import image1 from './img/garden_design_01.jpg'
import image2 from './img/garden_design_2.jpg'

import "./Styling/ServicesDesign.css"

class Design2 extends Component {
  render() {
    return (
     

    <div class="wrapper">
        {/* <header class="header">Header</header> */}
        <article class="main">
            <p style={{fontWeight: "bold"}}>Initial Meeting and Prelim Design</p>  
            <p style={{ textAlign: "justify"}}>Involve meeting with the customer to discuss ideas, themes, requirements and budget. This will lead to a preliminary design concept, which will include features, styles & planting.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Design Plans</p>  
            <p style={{ textAlign: "justify"}}>Upon confirmation of the design concept and more detailed plan will be created. Including greater details on dimensions, specific materials and features. (This will include construction drawings and planting plans where appropriate)</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Design Handover or Instillation</p>  
            <p style={{ textAlign: "justify"}}>Seasonal rose, fruit tree and shrub cutting carried out at the right time, best for the plant.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>General Maintenance</p>  
            <p style={{ textAlign: "justify"}}>Depending whether the project included installation or just design.</p>  
        </article>
        <aside style={{fontWeight: "bold", fontSize: "50px", color: "rgb(199, 68, 24)"}} class="aside aside-1">Design</aside>
        <aside class="aside aside-2">  
            <img class="img" alt="complex" src={image1} />
            <br></br>
            <img class="img" alt="complex" src={image2} />
        </aside>
        
    </div>


    );
  }
}
export default Design2;