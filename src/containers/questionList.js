import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class QuestionList extends Component {

state ={
    redirect:false,
    questionID: 0,
    unanswered:true,
}

redirect(id){
    this.setState({
        questionID:id,
        redirect:true,
    });
}


renderList(questions){


    if(questions.length == 0)
    {
        return<li>loading</li>
    }
    
    return questions.map((question) =>{

        return(
            <li 
             className ="list-group-item userItem"
             onClick ={this.redirect.bind(this, question.id)}
             
             key={question.id}>
             <img src={this.props.users.find(user =>user.id === question.author).avatarURL} className="thumbnail" />
            <b>{question.optionOne.text}</b>
            <br/>
            or
            <br/>
            <b>{question.optionTwo.text}</b>  
            
             </li>

        )
    })
}

    listchange() {
        const listBool = this.state.unanswered;
        this.setState({unanswered: !listBool});
    }



    render(){
        
        const questions = this.props.questions;
        const answeredUser = this.props.user.answers



        if(!questions || questions.length == 0)
        {
            return (<div>loading</div>)
        }

        if(this.state.redirect === true){
            const location = `/question/${this.state.questionID}`;
            return <Redirect to={location} />
        }

        
        if(this.state.unanswered === true)
        {
            return(
            <div className="container centerborder">
            <button onClick={() => this.listchange()} className="btn">To Answered List</button>
            <br />
                <h3>UnansweredList</h3>
                <ul className="list-group">
                    {this.renderList(questions.filter(question => answeredUser[question.id] === undefined))}
                </ul>
            </div>
            )
        } else {
            return(
            <div className="container centerborder">
                <button onClick={() => this.listchange()} className="btn">To Unanswered List</button>
                <br />
                <h3>AnsweredList</h3>
                <ul className="list-group">
                    {this.renderList(questions.filter(question => answeredUser[question.id] !== undefined))}
                    
                </ul>
            </div>
            )
        }
        
    }

}

function mapStateToProps(state){
    return{
        questions: state.questions,
        user: state.activeUser,
        users: state.users
    }
}

export default connect(mapStateToProps)(QuestionList)