import React from 'react';

import Home from './home.js';
import { Route } from 'react-router-dom';

import Landing from './landing.js';

class Private extends React.Component{

    constructor(){
        super();
    
    }

    render(){
        return(
            <div className='private'>
                <Route exact path='/' component={(props) => <Landing {...props} /> } />
                <Route path='/home' component={(props) => <Home {...props} {...this.props} />} />
            </div>
        );
    }
}

export default Private;