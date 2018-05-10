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
                    <article>
                        <div flex={1}>
                            aaaaaaaaaa
                        </div>
                        <div flex={1}>
                            aaaaaaaaaa
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}

export default LandingPage;