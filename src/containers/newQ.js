import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createQuestion } from '../actions/questions';


class NewQ extends Component {
    renderOptionField(field){  //you need the field argument to wire to the form!
        return(
            <div className ="form-group">
                <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                {...field.input}  //for pregenerated event handlers
                 />
                 <div>
                    <b>{field.meta.touched ? field.meta.error : ''}</b>
                 </div>
            </div>
        )
    }

onSubmit(values) {
    //work with api we need an action creator

    //next step is format the values for submittal
    this.props.createQuestion(values);
}


    render() {
        const { handleSubmit} = this.props;


        return(
            <div>
                <h4>New Question</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>  
                    <Field   //distinct input to be viewed by client    
                    label="Option 1"
                    name="question1"
                    component ={this.renderOptionField}  //outword facing to the user
                    />
                    <Field
                    label="Option 2"
                    name="question2"
                    component={this.renderOptionField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

function validate(values){
    const errors ={};

    //validate inputs from values
    if(!values.question1) {
        errors.question1 = "Enter question 1";
    }

    if(!values.question2) {
        errors.question2 = "Enter question 2"
    }

    //if errprs is empty, the form is fine to submit
    return errors
}

export default reduxForm({
    validate, //shortened from {validate: validate}  will be called automatically when someone tries to submit a form if errors shows up it doesn't submit
    form:'AskNewQuestion' // name of the form for if there are multiple forms on a sigle page. this must be unique!
})(
    connect(null, {createQuestion})(creNewQ)
)