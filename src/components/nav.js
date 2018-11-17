import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import LoggedInUser from '../containers/loggedInUser'
import { connect } from 'react-redux'
import { logOut } from '../actions/users';
import { Redirect } from 'react-router-dom'



 
class Nav extends Component {

    state={
        logOut:false
    }

    // logOut(){
    //     console.log("Hit the ground straight flex")
    //     this.props.logOut()
    //     this.setState({logOut:true})
    // }

    render() {

        
    // if(this.state.logOut === true) {
    //     return <Redirect to='/login' />
    //     }

    if(!this.props.user.hasOwnProperty('id'))
    {
        return <div></div>
    }

        return(
            <nav className='nav'>
                <ul className="nav nav-tabs list-inline">
                    <li className="list-inline-item">
                        <NavLink to='/home' exact activeClassName='active'>                       
                                Home
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to='/add'  activeClassName='active'>                      
                                New Question                     
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to='/leaderBoard' activeClassName='active'>                        
                            LeaderBoard                      
                        </NavLink>
                    </li> 
                    <li className="list-inline-item"
                    onClick={() =>this.props.logOut()}>
                        <NavLink to='/' activeClassName='active'>                       
                            Log Out                     
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <LoggedInUser />
                    </li>
                </ul>
            </nav>

        
        )
    }
}

function mapStateToProps(state) {
    return {
        user:state.activeUser
    }
}

export default connect(mapStateToProps, { logOut } )(Nav)