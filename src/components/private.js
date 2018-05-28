import React from 'react';

import Home from './home.js';
import { Route } from 'react-router-dom';

import Landing from './landing.js';
import Course from './course.js';
import Forums from './forums.js';

class Private extends React.Component{

    constructor(){
        super();
    
    }

    render(){
        return(
            <div className='private'>
                <Route exact path='/' component={(props) => <Landing {...props} /> } />
                <Route path='/home' component={(props) => <Home {...props} {...this.props} />} />
                <Route exact path='/courses/:courseId' component={(props)=> <Course {...props} {...this.props} /> } />
                <Route path='/courses/:courseId/:sesionName' component={(props) => <Forums {...props} {...this.props} />} />
            </div>
        );
    }
}

export default Private;