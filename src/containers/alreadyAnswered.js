import  React, {Component}  from 'react'
import { connect } from 'react-redux';

class AlreadyAnswered extends Component {

    
    renderCalculation() {
       const {user, users} = this.props;
       const {optionOne, optionTwo} = this.props.question
       const voteOne = optionOne.votes.length;
       const voteTwo = optionTwo.votes.length;
       const totalVotes = optionOne.votes.length + optionTwo.votes.length;

       return(
           <ul>
           <li 
             className ="list-group-item userItem "             
             key="optionOne"
             >
                <b>{optionOne.text}</b>
                <br />
                <p> {Math.floor((voteOne / totalVotes) * 100)}% </p>
                <br />
                <p>{voteOne} out of {totalVotes} votes </p>
                {optionOne.votes.includes(user.id) && <b><br/><span className="glyphicon glyphicon-star star"></span>Your Answer!</b>}
             </li>
             
             <li 
             className ="list-group-item userItem"             
             key="optionTwo"
             >
             <b>{optionTwo.text}</b>
             <br />
             <p>{Math.floor((voteTwo / totalVotes) * 100)}%</p>
             <br />
             <p>{voteTwo} out of {totalVotes} votes </p>
                {optionTwo.votes.includes(user.id) && <b><br/><span className="glyphicon glyphicon-star star"></span>Your Answer!</b>}
              
             </li>

           </ul>
           
           
       )

        

    }

    render(){
        return(
            <div className="container">
             <h4>Asked By: {this.props.users.find(user =>user.id === this.props.question.author).name}</h4>
            <img src={this.props.users.find(user =>user.id === this.props.question.author).avatarURL} className="thumbnailLarge" /> 
            <br />
            <h3>Results</h3>
            <ul className="list-group">
                {this.renderCalculation()}
            </ul>
            </div>
        )
    }
    
}
function mapStateToProps(state){

    return{
        user:state.activeUser,
        questions: state.questions,
        users: state.users
    }

}

export default connect(mapStateToProps)(AlreadyAnswered);