import React, {Component} from 'react'
import { connect } from 'react-redux';

class QuestionList extends Component {
//local state
constructor(props) {
    super(props);
    this.state = {
        answeredQuestions:[],
        unAnsweredQuestion:[]
    }

    //this.sortQuestions()
}

componentDidMount() {
    this.sortQuestions()
}

sortQuestions() {
    const userId = this.props.user.id;
    const answeredUser = Object.keys(this.props.user.answers)
    const questions = this.props.questions;

    console.log(userId);
    console.log(answeredUser);
    console.log(questions);
    const answered = questions.filter(question => answeredUser.includes(question.id));
    const unAnswered = questions.filter(question => !(answeredUser.includes(question.id)));

    console.log(answered);
    console.log(unAnswered);

    this.renderList(answered);
    this.renderList(unAnswered);

    this.setState({
        answeredQuestions:answered,
        unAnsweredQuestion:unAnswered
    });
}

renderList(questions){
    console.log('questions');
    console.log(questions);


    if(questions.length == 0)
    {
        return<li>loading</li>
    }
    
    return questions.map((question) =>{
        return(
            <li 
             key={question.id}>
            {question.optionOne} or {question.optionTwo}
             </li>

        )
    })
}



    render(){

        



        return (
            <div>
                <h3>AnsweredList</h3>
                <ul>
                    {this.renderList(this.state.answeredQuestions)}
                </ul>
                <h3>UnansweredList</h3>
                <ul>
                {this.renderList(this.state.answeredQuestions)}
                </ul>
            </div>
                    
            )
    }

}

function mapStateToProps(state){
    return{
        questions: state.questions,
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(QuestionList)