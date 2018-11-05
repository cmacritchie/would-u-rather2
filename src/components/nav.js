import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return(
        <nav className = 'nav'>
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName='active'>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/newQuestion'  activeClassName='active'>
                    New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderBoard' activeClassName='active'>
                    LeaderBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' activeClassName='active'>
                    login 
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}