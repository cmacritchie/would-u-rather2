import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from '../data/_DATA.js'

  export function getUser() {
      return _getUsers()
            .then(function(users) {
          return users;
      });
  }

  export function refreshUser(userID){
    return _getUsers()
    .then(function(users) {
        debugger;
        const refreshedUser = users[userID];
        debugger; 
        
    return refreshedUser;
    });
  }

  export function getQuestions() {
      return _getQuestions()
            .then(function(questions) {
               return questions;
            })
  }

  export function saveQuestion(question){
    return _saveQuestion(question);
            // .then(function(val) {
            //     return val;
            // })
    }


export function saveQuestionAnswer(answer){
    return _saveQuestionAnswer(answer);
            // .then(function(val){
            //     return val;
            // })
}
  