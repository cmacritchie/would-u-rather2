import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { answerQuestion} from '../actions/questions';
//add action creator

//const  { DOM: { input} } = React;

class AnswerQuestion extends Component {

    state ={
        toAnswer:false,
    }
    onSubmit(values) {
    

        var question ={
            qid: this.props.question.id,
            authedUser: this.props.author.id,
            answer:values.optionChoice
        };

        
        this.props.answerQuestion(question, this.props.author, () => {
            
       
    });
    }

    render() {
        const { handleSubmit } = this.props;
        const question = this.props.question;
        

        if(this.state.toAnswer === true)
        {
            return <div>home</div>
        }

        return(
            <div>
            <div className="clearBoth"></div>
            <div className="container .centerborder">
                <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <div>
                <img src={this.props.users.find(user =>user.id === question.author).avatarURL} className="thumbnailLarge" />
                <br />
                <h4>{this.props.users.find(user =>user.id === question.author).name} Asks: Would You Rather... </h4>
                    <div>
                        <label><Field name="optionChoice" component="input" type="radio" value="optionOne"/>{question.optionOne.text}</label>
                        <br />
                        <b>OR</b>
                        <br />
                        <label><Field name="optionChoice" component="input" type="radio" value="optionTwo"/> {question.optionTwo.text}</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        author: state.activeUser,
        questions: state.questions,
        users: state.users
    }
}


function validate(values) {
    const errors ={};

    if(!values.optionChoice)
    {
        errors.optionChoice ="You need to select an option to submit";
        //alert("You need to select an option to submit!");
    }

    return errors;
}

export default reduxForm({
    validate,
    form:'AnswerQuestion'  
})(
    connect(mapStateToProps, {answerQuestion})(AnswerQuestion)
)

