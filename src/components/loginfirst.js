import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Redirect , NavLink } from 'react-router-dom'
import LoginContainer from '../containers/loginContainer'
export default class App extends Component {

    render(){

        const { id } = this.props.match.params;
        console.log(this.props);
        // console.log(this.props.match);
        console.log(this.props.location.pathname);

        debugger;
        return (
            <div>
            <h1>You'll need to login First to navigate there...</h1>
                <LoginContainer intendedDest={this.props.intendedDest} />
            </div>
        )
    }



}