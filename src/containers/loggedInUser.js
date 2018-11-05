import React, {Component} from 'react'
import { connect } from 'react-redux'; //need it to recognise state

class LoggedInUser extends Component {
    
    render() {
        
        if(!this.props.user){     //if it doesn't exist aka null
            return <p>Log in to get started</p>
        } 

        return <p>{this.props.user.name}</p>
        
        
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    }

}
//only need this if we need to render state
export default connect(mapStateToProps)(LoggedInUser) 