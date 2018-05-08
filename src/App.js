import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import CenterContainer from './components/centercontainer.js';
import Login from './components/login.js';

const style = {

};

class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="App">
        <Router>
          <main>
            <Login type='' />
          </main>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
