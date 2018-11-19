import React, {Component} from 'react'
import { connect } from 'react-redux'; //need it to recognise state



const LoggedInUser = ({user}) => {
    
    
        
        if(!user.hasOwnProperty('id')){     
            return <p></p>
        } 

        return (
            <div className="inlineUser">
            <span>
                <b>Hello {user.name}</b>
                <img className="smallImage" src={user.avatarURL} />
            </span>
            </div>
        
        )
        
        
    }

function mapStateToProps(state){
    return{
        user: state.activeUser
    }

}
//only need this if we need to render state
export default connect(mapStateToProps)(LoggedInUser) 