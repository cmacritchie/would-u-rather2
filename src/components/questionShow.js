import React, {Component} from 'react';
import { connect} from 'react-redux';
import AnswerQuestion from '../containers/answerQuestion'
import AlreadyAnswered from '../containers/alreadyAnswered'

class QuestionShow extends Component {
    // componentDMount() {
    //     const {id} = this.props.match.params;
    //     console.log("mounted");
    //     console.log(id);
    // }


    render() {
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
                QuestionShow
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