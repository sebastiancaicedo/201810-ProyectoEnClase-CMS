import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import CenterContainer from './components/centercontainer.js';
import Login from './components/login.js';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import EditCourse from "./components/edit-course-page/edit-course-page";

const style = {

};

class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="App">
        <Router>
          <main>
            <EditCourse />
            {
            /*
            <Login type='' />
            */
            }
          </main>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
