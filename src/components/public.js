import React from 'react';

import {Route} from 'react-router-dom';
import CenterContainer from './centercontainer.js';
import Landing from './landing.js';
import LandingPage from '../components/landing-page/landing-page'
import Login from './login.js';
import Signup from './signup.js';
import ForgotPassword from './forgotpassword.js';

class Public extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div className='public' style={{height: '90%'}}>
                <Route exact path='/' component={ LandingPage } />
                <Route path='/login' component={(props) => <CenterContainer Component = {()=> 
                                                                            <Login {...props} 
                                                                            type='basic' handleSuccessfulLogin={this.props.onLogin} 
                                                                            signupPath='/signup' forgotPasswordPath='/forgotpassword' />}
                                                                            />
                                                                        }
                                                                        />
                <Route path='/forgotpassword' component={(props) => <CenterContainer Component={()=> <ForgotPassword {...props} /> } /> } />
                <Route path='/signup' component={(props)=> <CenterContainer Component = {()=> <Signup {...props} onLogout={this.props.onLogout} /> } /> } />
            </div>
        );
    }
}

export default Public;