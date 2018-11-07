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

// componentDidMount() {
//     this.sortQuestions()
// }

// sortQuestions() {
//     return
//     const userId = this.props.user.id;
//     const answeredUser = Object.keys(this.props.user.answers)
//     const questions = this.props.questions;

//     console.log(userId);
//     console.log(answeredUser);
//     console.log(questions);
//     const answered = questions.filter(question => answeredUser.includes(question.id));
//     const unAnswered = questions.filter(question => !(answeredUser.includes(question.id)));

//     console.log(answered);
//     console.log(unAnswered);

//     this.renderList(answered);
//     this.renderList(unAnswered);

//     this.setState({
//         answeredQuestions:answered,
//         unAnsweredQuestion:unAnswered
//     });
// }

renderList(questions){

    // questions.filter(question => answeredUser[question.id] !== undefined)

     console.log('questions');
     console.log(questions);
    // console.log("answers");
    // console.log(Object.keys(this.props.user.answers));
     

    if(questions.length == 0)
    {
        return<li>loading</li>
    }
    
    return questions.map((question) =>{
        return(
            <li 
             key={question.id}>
            {question.optionOne.text} or {question.optionTwo.text}
             </li>

        )
    })
}



    render(){
        const questions = this.props.questions;
        const answeredUser = this.props.user.answers



        if(!questions || questions.length == 0)
        {
            return (<div>loading</div>)
        }

        return (
            <div>
                <h3>AnsweredList</h3>
                <ul>
                    {this.renderList(questions.filter(question => answeredUser[question.id] !== undefined))}
                    
                </ul>
                <h3>UnansweredList</h3>
                <ul>
                    {this.renderList(questions.filter(question => answeredUser[question.id] === undefined))}
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