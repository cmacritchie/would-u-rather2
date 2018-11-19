import React, {Component} from 'react';
import { connect} from 'react-redux';
import AnswerQuestion from '../containers/answerQuestion'
import AlreadyAnswered from '../containers/alreadyAnswered'
import { Redirect } from 'react-router-dom'
import LoginContainer from '../containers/loginContainer'
import NoMatch from '../components/NoMatch'
import { getAllQuestions } from '../actions/startData'

class QuestionShow extends Component {
   

    render() {

        if(!this.props.user.hasOwnProperty('id'))
        {
            return <LoginContainer redirect={this.props.location.pathname} noticeMessage="Login First to view question" />
        }

        const questions = this.props.questions;
        const answeredQuestions = Object.keys(this.props.user.answers);
        const allQustionIds = this.props.questions.map(a =>a.id);
        const { id } = this.props.match.params;
        const quest = questions.find((question) =>{
            return question.id === id
        });


        console.log("Here it is")
        console.log(questions);
        console.log(answeredQuestions);
        console.log(id);
        console.log(allQustionIds);
        console.log("The Quest");
        console.log(quest);

        if(answeredQuestions.includes(id))
        {
            return(
                <div>
                    <AlreadyAnswered question ={quest} />
                    
                </div>
            )
        }

        if(allQustionIds.includes(id))
        {
            return(
                <div>
                    <AnswerQuestion question ={quest} />
                </div>
            )
        }


        return(
            <div>
                <NoMatch />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionShow);