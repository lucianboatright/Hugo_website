

import React from 'react'
import Install from './Services_Install'
import Maintaining from './Services_Maintain'
import Design from './Services_Design'
import { Helmet } from 'react-helmet'

 
const Services = () => {


  return (

   <>
   <Helmet>
     <title>Services</title>
   </Helmet>
   <Design className="install_box">
   </Design>

    <Install className="install_box" > 
    </Install>

    <Maintaining className="install_box" > 
    </Maintaining>

   
   

    </>
  )
}
export default Services