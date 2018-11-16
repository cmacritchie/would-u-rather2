import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './home'
import LeaderBoard from './leaderBoard'
import Nav from './nav'
import newQuestion from './newQuestion'
import Login from './Login'
import LoggedInUser from '../containers/loggedInUser'
import { getAllUsers, getAllQuestions } from '../actions/startData'
// import { connect } from 'http2';
import {connect} from 'react-redux'
import QuestionShow from '../components/questionShow'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers());
    this.props.dispatch(getAllQuestions());
  }
  
  
  render() {
    return (
<Router>
  <Fragment>
    <Nav />
      <div>    
          <Route path ='/home' exact component={Home} />
          <Route path ='/newQuestion' exact component={newQuestion} />
          <Route path='/leaderBoard' component ={LeaderBoard} />
          <Route path='/login' component={Login} />
          <Route path='/question/:id' component={QuestionShow} />       
      </div>
  </Fragment>
</Router>

    );
  }
}
function mapStateToProps(state){

  return{
  user: state.activeUser
  }
}

export default connect(mapStateToProps)(App);
