import React from 'react';

import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styles from "material-ui/styles/baseThemes/darkBaseTheme";
import { Editor } from '@tinymce/tinymce-react';

import "./../../css/edit-course-page/edit-course-page.css"

class EditCourse extends React.Component {

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
                    title={<span style={styles.title}>Editar curso</span>}
                    iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
                >
                    <FlatButton style={buttonStyle} label="Log Out" />
                </AppBar>
                <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
      />
            </section>
        );
    }
}

export default EditCourse;