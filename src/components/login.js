import React from 'react';
import './../css/login.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import CenterContainer from './centercontainer.js';

import {Link} from 'react-router-dom';

import {logIn, getUserById, logOut} from './../API/api.js';
import home from './home';
import PopUp from './popup.js';

/*propsTypes = {
    signupPath = 'string', //the sign out page path
    forgotPasswordPath = 'string //the forgot password page path
    handleSuccessfulLogin = 'Method' //a method to execute when login succesful, receives a parameter the loggedResult
}*/

const textFieldStyles = {
    width: '100%',
};

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
			emailInput: null,
            passwordInput: null,
            dialogOpen: false
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

        logIn(credentials)
        .then(result =>{
            
            getUserById(result.user.uid)
            .then(_user=>{

                if(_user.status === 'active'){

                    this.props.history.push('/home');
                    this.props.handleSuccessfulLogin(_user);
                }
                else{
                    //Desactivated can't login
                    logOut()
                    .then(result=>{
                        this.setState({
                            dialogOpen: true
                        });
                    });
                }
            })
        })

        .catch(error =>{
            console.log(error);
        });
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
                            name='passwordInput'
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
                                <Link className='text-right small' to={this.props.forgotPasswordPath != null? this.props.forgotPasswordPath : 'No forgotPasswordPath prop [string]'}>Forgot password?</Link>
                            </div>
                        }
                        <br/>
                        <p className='small'>Not registered? <Link to={this.props.signupPath != null?this.props.signupPath:'No signOutPath prop [string]'}>Create an account</Link> </p>
                    </div>
                </form>
                <PopUp content={()=> <p>This user is desactivated/deleted.</p>}
                        open={this.state.dialogOpen}
                        title='User Desactivated'
                        submitButtonText='Accept'
                        handleClose={()=> this.setState({dialogOpen: false})}
                        onSubmit={()=> this.setState({dialogOpen:false})}
                />
            </Paper>
        );
    }
}

export default Login;