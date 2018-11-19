import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './home'
import Home from '../containers/questionList'
import LeaderBoard from './leaderBoard'
import Nav from './nav'
// import newQuestion from './newQuestion'
import newQuestion from '../containers/newQ'
import Login from './Login'
import LoggedInUser from '../containers/loggedInUser'
import { getAllUsers, getAllQuestions } from '../actions/startData'
// import { connect } from 'http2';
import {connect} from 'react-redux'
import QuestionShow from '../components/questionShow'
import NoMatch from '../components/NoMatch'
import LoginFirst from '../components/loginfirst'

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
      <Switch>   
      
          <Route path ='/home' exact component={Home} />
          <Route path ='/add' exact component={newQuestion} />
          <Route path='/leaderBoard' component ={LeaderBoard} />
          <Route path='/' exact component={Login} />
          <Route path='/question/:id' component={QuestionShow} /> 
          <Route path='/redirect' component={LoginFirst} />
          <Route component={NoMatch} />   
          
      </Switch>   
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
