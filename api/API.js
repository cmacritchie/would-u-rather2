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
        
        const refreshedUser = users[userID];
        
        
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
            
    }


export function saveQuestionAnswer(answer){
    return _saveQuestionAnswer(answer);
            
}
  