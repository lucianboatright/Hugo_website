import React, {Component} from 'react';
import logo from './img/HB_logo.png'

class Pictures extends Component {

    render(){

        return(
            <>
            <h1>Hello this is the Pictures compnent</h1>
            <img src={logo} alt=""/>
            </>
        )
    }
}

export default Pictures;