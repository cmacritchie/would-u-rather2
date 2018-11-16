export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
import { saveQuestion, saveQuestionAnswer, refreshUser } from '../../api/API';
import { getAllUsers, getAllQuestions } from '../actions/startData'
import {selectUser } from '../actions/users.js'

export function sendQuestions(question) {
    return{        
        type:FETCH_QUESTIONS,
        payload:question
    }

}
export function createQuestion(question, callback){

    return(dispatch) => {
        return saveQuestion(question)
        .then((result) => {
            dispatch(sendNewQuestion(result))

        }).then(() => callback());
    }

}

function sendNewQuestion(newQuestion){
    return{
        type:CREATE_QUESTION,
        payload:newQuestion
    };

}

export function answerQuestion(question, user, callback){
    console.log(user);
    debugger;
    return(dispatch) => {
        return saveQuestionAnswer(question)
        .then((result) => {
            debugger;
           
           dispatch(getAllQuestions());
           dispatch(getAllUsers());
           var updateduser = refreshUser(user.id)
           updateduser.then((data) =>{
            dispatch(selectUser(data));
           })
           
           
           
             
        }).then(() => callback());
    }

}