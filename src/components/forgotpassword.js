import React from 'react'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './../css/forgotpassword.css';

const textFieldStyles={
    width: '100%'
}

class ForgotPassword extends React.Component{

    render(){
        return(
            <Paper className='forgot-password container-fluid' zDepth={5}>
                <form className='container-fluid' onSubmit = {this.handleSumbit} >
                <h2 className='text-center text-uppercase'><strong>{this.props.title != null? this.props.title : 'Forgot Password'}</strong></h2>
                    <div className='form-group'>
                        <TextField
                            id='tffpEmail'
                            name='emailInput'
                            onChange={this.handleTextChange}
                            type = 'email'
                            hintText = 'Type your email'
                            floatingLabelText = 'Email'
                            style={textFieldStyles}/>
                    </div>
                    <RaisedButton label="Send" type='submit' primary={true} fullWidth={true}/>
                </form>
            </Paper>
        );
    }
}

export default ForgotPassword;