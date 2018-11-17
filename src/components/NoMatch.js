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
            <br />
            <p>If you're trying to see priveleged information, you have to login first</p>
            <NavLink to="/" activeClassName='active'>
            <h4>Go to Login</h4>
            </NavLink>
            {/* <button className="btm bt-warning"></button> */}
            </div>
        )
    }



}


