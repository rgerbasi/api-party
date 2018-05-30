import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Nasa.css'

class Nasa extends Component{

    render() {
        return (
            <div className="Nasa">
            <h1>nasa</h1>
            <img src="" alt="" className="logo"/>

            <Route exact path="/nasa"/>
            <Route path="/nasa/:rover"/>
            </div>
        )
    }
}
 export default Nasa