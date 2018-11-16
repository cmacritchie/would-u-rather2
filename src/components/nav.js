import React from 'react'
import { NavLink } from 'react-router-dom'
import LoggedInUser from '../containers/loggedInUser'

export default function Nav() {
    
    // if(!props.user){
    //     return(
    //     <nav className='nav'>
    //         <ul className="nav nav-tabs list-inline"> 
    //             <li className="list-inline-item">
    //                 <NavLink to='/login' activeClassName='active'>
    //                     <button className="btn btn-primary">
    //                         login
    //                     </button> 
    //                 </NavLink>
    //             </li> 
    //         </ul>
    //     </nav>
    //     )
    // }
    
    return(
        <nav className='nav'>
            <ul className="nav nav-tabs list-inline">
                <li className="list-inline-item">
                    <NavLink to='/home' exact activeClassName='active'>
                        <button className="btn btn-primary">
                            Home
                        </button>
                    </NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink to='/newQuestion'  activeClassName='active'>
                        <button className="btn btn-primary">
                            New Question
                        </button>
                    </NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink to='/leaderBoard' activeClassName='active'>
                        <button className="btn btn-primary">
                            LeaderBoard
                        </button>
                    </NavLink>
                </li> 
                <li className="list-inline-item">
                    <NavLink to='/login' activeClassName='active'>
                        <button className="btn btn-primary">
                            login
                        </button> 
                    </NavLink>
                </li>
                <li className="list-inline-item">
                    <LoggedInUser />
                </li>
            </ul>
        </nav>

    )
}