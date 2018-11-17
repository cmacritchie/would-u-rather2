import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createQuestion } from '../actions/questions';
//import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom'



class NewQ extends Component {
    state ={
        toHome:false,
    }




    renderOptionField(field){  //you need the field argument to wire to the form!
        return(
            <div className ="form-group">
                <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                placeholder={field.placeholder}
                {...field.input}  //for pregenerated event handlers
                 />
                 <div>
                    <b>{field.meta.touched ? field.meta.error : ''}</b>
                 </div>
            </div>
        )
    }

onSubmit(values) {
    

    var question ={
        optionOneText: values.option1,
        optionTwoText: values.option2,
        author: this.props.author.id
    };

    this.props.createQuestion(question, () => {
        
    this.setState({toHome:true})
});
}


    render() {

        
        if(!this.props.author.hasOwnProperty('id'))
        {
            return <Redirect to='/404' />
        }




        const { handleSubmit} = this.props;

        if(this.state.toHome === true) {
         return <Redirect to='/home' />
        }

        return(
            <div>
                <br />
                <h4>Would You Rather...</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>  
                    <Field   //distinct input to be viewed by client    
                    label="Option 1"
                    name="option1"
                    placeholder="Enter Option One Text Here"
                    component ={this.renderOptionField}  //outword facing to the user
                    />
                    <br />
                    <h5>--- OR ---</h5>
                    <br />
                    <Field
                    label="Option 2"
                    name="option2"
                    placeholder="Enter Option Two Text Here"
                    component={this.renderOptionField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {

    return{
        author:state.activeUser 
    }
}



function validate(values){
    const errors ={};

    //validate inputs from values
    if(!values.option1) {
        errors.option1 = "Enter question 1";
    }

    if(!values.option2) {
        errors.option2 = "Enter question 2"
    }

    //if errprs is empty, the form is fine to submit
    return errors
}

export default reduxForm({
    validate, //shortened from {validate: validate}  will be called automatically when someone tries to submit a form if errors shows up it doesn't submit
    form:'AskNewQuestion' // name of the form for if there are multiple forms on a sigle page. this must be unique!
})(
    connect(mapStateToProps, {createQuestion})(NewQ)
)