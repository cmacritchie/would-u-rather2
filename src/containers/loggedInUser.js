import React, {Component} from 'react'
import { connect } from 'react-redux'; //need it to recognise state

class LoggedInUser extends Component {
    
    render() {
        
        if(!this.props.user){     //if it doesn't exist aka null
            return <p></p>
        } 

        return (
            <div className="inline">
            <span>
                <b>Hello {this.props.user.name}</b>
                <img className="smallImage" src={this.props.user.avatarURL} />
            </span>
            </div>
        
        )
        
        
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    }

}
//only need this if we need to render state
export default connect(mapStateToProps)(LoggedInUser) 