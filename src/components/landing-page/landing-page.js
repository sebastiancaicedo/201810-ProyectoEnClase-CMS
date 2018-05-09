import React from 'react';

import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import styles from "material-ui/styles/baseThemes/darkBaseTheme";

import "./../../css/landing-page/landing-page.css"

class LandingPage extends React.Component{

    constructor(){
        super();
    }
    
    render(){
        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white',
            marginTop: '1%'
        }
        return(
            <AppBar
                title={<span style={styles.title}>Title</span>}
                showMenuIconButton={false}
            >
                <FlatButton style={buttonStyle} label="Log In" />
                <FlatButton style={buttonStyle} label="Sign Up" />
            </AppBar>
        );
    }
}

export default LandingPage;