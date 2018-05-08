import React from 'react';
import './../css/login.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'

import CenterContainer from './centercontainer.js';

import {Link} from 'react-router-dom';

/*propsTypes = {
    signOutPath = 'string', //the sign out page path
    forgotPasswordPath = 'string //the forgot password page path
    handleSuccessfulLogin = 'Method' //a method to execute when login succesful, receives a parameter the loggedResult
}*/

const textFieldStyles = {
    width: '100%',
};

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
			emailInput:'',
			passwordInput:''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleTextChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSumbit(e){
        e.preventDefault();        

        const credentials = {
            email: this.state.emailInput,
            password: this.state.passwordInput
        };

        /*if(this.props.handleLogin != null){

            this.props.handleLogin(credentials)

            .then((result)=>{
                console.log('login succesful');
                if(this.props.handleSuccessfulLogin != null){
                    this.props.handleSuccessfulLogin(result);
                }
                else{
                    console.log('No handleSuccessfulLogin prop [Method = myMethod(loginReturn={return properties})]');
                }
            })

            .catch((error) =>{

                document.getElementById('tfPassword').value = '';
                console.log('error: ' + error);
            });
        }
        else{
            console.log('No handleLogin prop [Promise = myPromise(credentials={email, password})]')
        }*/
    }

    render(){
        return(
            <Paper className = 'login container-fluid' zDepth = {5}>
                <form onSubmit = {this.handleSumbit} >
                <h2 className='text-center text-uppercase'><strong>{this.props.title != null? this.props.title : 'Login'}</strong></h2>
                    <div className='form-group'>
                        <TextField
                            id='tfEmail'
                            name='emailInput'
                            onChange={this.handleTextChange}
                            type = 'email'
                            hintText = 'Type your email'
                            floatingLabelText = 'Email'
                            style={textFieldStyles}/>
                        <TextField
                            id='tfPassword'
                            name='passworInput'
                            onChange={this.handleTextChange}
                            type = 'password'
                            hintText = 'Type your Password'
                            floatingLabelText = 'Password'
                            style={textFieldStyles}/>
                        {
                            this.props.type != 'basic'?

                            <span></span>
                            :
                            <div className = 'text-left small'>
                                <Checkbox label='Remember me'/>
                            </div>
                        }
                    </div>
                    <RaisedButton label="Login" type='submit' primary={true} fullWidth={true}/>
                    <div>
                        <br/>
                        {
                            this.props.type != 'basic'?
                            <span></span>
                            :
                            <div>
                                <Link className='text-right small' to={this.props.forgoPasswordPath != null? this.props.forgoPasswordPath : 'No forgotPasswordPath prop [string]'}>Forgot password?</Link>
                            </div>
                        }
                        <br/>
                        <p className='small'>Not registered? <Link to={this.props.signOutPath != null?this.props.signOutPath:'No signOutPath prop [string]'}>Create an account</Link> </p>
                    </div>
                </form>
            </Paper>
        );
    }
}

export default Login;