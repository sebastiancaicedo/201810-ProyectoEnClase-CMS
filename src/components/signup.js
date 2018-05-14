import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import {signUp, saveUserInDb, logOut} from './../API/api.js';

import './../css/signup.css';

const textFieldStyles = {
    width: '100%',
};

class Signup extends React.Component{

    constructor(){
        super();
        this.state={
            nameInput: null,
            emailsuInput: null,
            passwordInput: null,
            confirmPassworInput: null
        }
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }

    handleTextChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSumbit(e){
        e.preventDefault();        

        if(this.state.passworInput === this.state.confirmPassworInput){
        

            signUp(this.state.emailInput, this.state.passworInput)
            .then(result =>{

                const _user = {
                    id: result.user.uid,
                    name: this.state.nameInput,
                    email: this.state.emailInput,
                    role: 'user',
                    status: 'active'
                }

                saveUserInDb(_user)
                .then(()=>{

                    console.log("register");
                    
                    logOut()
                    .then(()=>{
                         this.props.onLogout()
                    })
                })
            })

            .catch(error =>{
                console.log(error);
            });
        }
        else{
            console.log("Passwords don't match");
            
        }
    }

    render(){
        return(
            <Paper className='signup container-fluid' zDepth={5}>
                <form onSubmit = {this.handleSumbit} >
                <h2 className='text-uppercase'><strong>{this.props.title != null? this.props.title : 'Sign Up'}</strong></h2>
                    <div className='form-group'>
                        <TextField
                            id='tfsuName'
                            name='nameInput'
                            onChange={this.handleTextChange}
                            hintText = 'Type your name'
                            floatingLabelText = 'Name'
                            style={textFieldStyles}/>
                        <TextField
                            id='tfsuEmail'
                            name='emailInput'
                            onChange={this.handleTextChange}
                            type = 'email'
                            hintText = 'Type your email'
                            floatingLabelText = 'Email'
                            style={textFieldStyles}/>
                        <TextField
                            id='tfsuPassword'
                            name='passwordInput'
                            onChange={this.handleTextChange}
                            type = 'password'
                            hintText = 'Type your Password'
                            floatingLabelText = 'Password'
                            style={textFieldStyles}/>
                        <TextField
                            id='tfsuConfirmPassword'
                            name='confirmPasswordInput'
                            onChange={this.handleTextChange}
                            type = 'password'
                            hintText = 'Confirm your Password'
                            floatingLabelText = 'Confirm Password'
                            style={textFieldStyles}/>
                    </div>
                    <RaisedButton label="Register" type='submit' primary={true} fullWidth={true}/>
                </form>
            </Paper>
        );
    }
}

export default Signup;