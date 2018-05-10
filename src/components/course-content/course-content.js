import React from 'react';

import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styles from "material-ui/styles/baseThemes/darkBaseTheme";


class CourseContent extends React.Component {

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
                    title={<span style={styles.title}>Nombre curso</span>}
                    iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
                >
                    <FlatButton style={buttonStyle} label="Log Out" />
                </AppBar>
                
            </section>
        );
    }
}

export default CourseContent;