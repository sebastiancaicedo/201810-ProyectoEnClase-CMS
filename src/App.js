import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import CenterContainer from './components/centercontainer.js';
import Login from './components/login.js';
import Navbar from './components/navbar.js';
import Private from './components/private.js';
import Public from './components/public.js';

import {isAuthenticated, getUserById} from './API/api.js';

const style = {

};

class App extends Component {

  constructor(){
    super();
    this.state = {
      isAuth: false,
      loggedUser: null
    }
    this.onLogout = this.onLogout.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogout(){
    window.location = '/';
    this.setState({
      isAuth: false,
      loggedUser: null
    });
  }

  onLogin(_user){
    console.log('logged in');
    this.setState({
      isAuth: true,
      loggedUser: _user
    });
  }

  componentWillMount(){
    isAuthenticated
    .then((user)=>{
      if(user != null){

        getUserById(user.uid)
        .then(_user=>{

          this.onLogin(_user);
        });
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider className="App">
        <Router>
          <main>
            <Route path='/' component= {(props) => <Navbar {...props} title='CMS' isAuth ={this.state.isAuth} onLogout={this.onLogout} /> } />
            {
              this.state.isAuth?
              <Private loggedUser={this.state.loggedUser} />
              :
              <Public onLogin={this.onLogin} onLogout={this.onLogout} />
            }
          </main>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
