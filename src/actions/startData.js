
import { getUser, getQuestions } from '../../api/API.js'
import { sendUsers } from './users.js';
import { sendQuestions } from './questions.js'




export function getAllUsers() {
    
    return(dispatch) => {
        return getUser()
        .then((users) => {
            dispatch(sendUsers(Object.keys(users).map(i =>users[i])))     
        });

    }
}

export function getAllQuestions() {
    return(dispatch) =>{
        return getQuestions()
        .then((questions) => {
            dispatch(sendQuestions(Object.keys(questions).map(i => questions[i] )))
        })
    }
}