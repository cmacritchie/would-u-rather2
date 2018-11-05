import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUser from './reducer_activeUser'
import Questions from './reducer_questions'

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser: ActiveUser,
  questions: Questions

});

export default rootReducer;
