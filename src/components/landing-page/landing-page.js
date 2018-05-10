import React from 'react';

import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import styles from "material-ui/styles/baseThemes/darkBaseTheme";
import LandingCarousel from "./carousel";

import "./../../css/landing-page/landing-page.css"

class LandingPage extends React.Component {

    constructor() {
        super();
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white',
            marginTop: '1%'
        }
        const container = {
            display: 'flex',
            justifyContent: 'space-around'
        }
        return (
            <section>
                <AppBar
                    title={<span style={styles.title}>Title</span>}
                    showMenuIconButton={false}
                >
                    <FlatButton style={buttonStyle} label="Log In" />
                    <FlatButton style={buttonStyle} label="Sign Up" />
                </AppBar>
                <section>
                <LandingCarousel /> 
                </section>
                <section>
                    <article style={container}>
                        <div>
                            <img src="https://2.bp.blogspot.com/-88oUjcIU568/VywRvSgYLhI/AAAAAAAADHg/-8BffRe6qAIdfGzYcOphUkgv-olK-5hzwCLcB/s1600/rom-blu-studio-5.0-c-d536-generic.jpg" style={{width: '300px'}} />
                        </div>
                        <div>
                            <img src="https://2.bp.blogspot.com/-88oUjcIU568/VywRvSgYLhI/AAAAAAAADHg/-8BffRe6qAIdfGzYcOphUkgv-olK-5hzwCLcB/s1600/rom-blu-studio-5.0-c-d536-generic.jpg" style={{width: '300px'}} />
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}

export default LandingPage;