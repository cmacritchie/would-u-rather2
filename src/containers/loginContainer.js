import React, {Component} from 'react'
import { connect } from 'react-redux' 
import {selectUser, getAllUsers} from '../actions/users'
//import * as action from '../actions'
import {bindActionCreators} from 'redux' //makes sure that action flows through all reducers





export class Login extends Component{

// componentWillMount() {
//     this.props.dispatch(getAllUsers());
//     //getUser()
// }


    renderUserList() {

        if(!this.props.users){
            return <li>loading Users</li>
        }

        return this.props.users.map((user) => {
            return (
                <li 
                onClick={()=>this.props.selectUser(user)} //this is possible because of mapDispatchtoProps and bindactionCreator 
                key={user.name}>
                {user.name}
                </li>
            )
        })
    }

    render() {
        return(
            <div>
                <br />  
                       
                <div className="container centerborder">
                <h4>Welcome to Would You Rather</h4>
                <p>please sign in to continue</p> 
                    <div className="dropdown center">
                    <button className="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">Select User
                    <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            {this.renderUserList()}
                        </ul>
                    </div>
                </div>
            </div>
            



            
        )
    }
}

function mapStateToProps(state) {
    //whataever is returned will show up as props in Login
    //e.g. this stillw works:  return { users: [{name:'Dave'}, {name:'Don'}]}
    
    return{
        users:state.users //from reducer

    }
}

//anything returned frm this functionw ill end upa as props on loginContainter
//we can call this.props.selectUser with this
function mapDispatchToProps(dispatch){
    
    //whenever selectUser is called he result should be passed to all our reducers
    //the second selectUser is the action creator we imported at the top
    //when selectuser is called it goes through dispatch
    //dispatch takes all the actions and runs them through all the reducers like a funnel
    //the purpose of bindaActioncreators is take what is returned from select user to have
    //it flow through the reducers
    return bindActionCreators({selectUser: selectUser,
                               getAllUsers: getAllUsers}, dispatch) 
}

//promote loginContainer from component to container
//it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Login)