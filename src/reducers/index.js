import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUser from './reducer_activeUser'
import Questions from './reducer_questions'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser: ActiveUser,
  questions: Questions,
  form: formReducer       //reducer Form

});

export default rootReducer;
