import React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {logOut} from './../API/api.js';

import './../css/navbar.css';

const style={
    padding:0,
    margin:0
}

const Pages = (props) =>{
    return(
        <div className='navbar-pages'>
            <div className='pages-container container-fluid'>
                <FlatButton label='Main Page' onClick={()=> {props.history.push('/')}}/>
                <FlatButton label='Courses' onClick={()=> {
                    props.isAuth?
                    props.history.push('/home')
                    :
                    props.history.push('login')
                }}/>
            </div>

            <div className='signbutton'>
                <RaisedButton secondary={true} 
                            label={props.isAuth == true? "Logout": "Login / Sign Up"}
                            onClick={props.handleClick}
                            />
            </div>
        </div>
    );
}

class Navbar extends React.Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(!this.props.isAuth){
            window.location = '/login'
        }
        else{
            logOut();
            console.log("logout");
            this.props.onLogout();
        }
    }

    render(){
        return(
            <div style={style} className = 'navbar'>
                <header style={{width: '100%'}}>
                    <AppBar title= {this.props.title != null?this.props.title : "No props title" }
                            zDepth={4}
                            /*iconClassNameRight="muidocs-icon-navigation-expand-more"*/
                            onTitleClick={()=>{this.props.history.push('/')}}
                            /*iconElementRight={<RaisedButton secondary={true} 
                                                            label={this.props.isAuth == true? "Logout": "Login / Sign Up"}
                                                            onClick={this.handleClick}
                                                            />
                                                        }*/
                    >
                        <Pages {...this.props} handleClick={this.handleClick} />
                    </AppBar>
                </header>
            </div>
        );
    }
}

export default Navbar;