import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Redirect , NavLink } from 'react-router-dom'
export default class App extends Component {

    render(){

        return (
            <div>
            <h1>ERROR 404</h1>
            <h5>Well... That Didn't work...</h5>
            <br/>
            <p>Looks like that address doesn't exist</p>
            <br />        
            <NavLink to="/" activeClassName='active'>
            <h4>Go to Login</h4>
            </NavLink>
            {/* <button className="btm bt-warning"></button> */}
            </div>
        )
    }



}


