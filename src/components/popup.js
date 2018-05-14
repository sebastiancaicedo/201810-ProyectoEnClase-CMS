import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class PopUp extends React.Component {
  
    render() {

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.props.handleClose}
        />,
        <FlatButton
          label={this.props.submitButtonText}
          type='submit'
          primary={true}
          keyboardFocused={true}
          onClick={this.props.onSubmit}
        />,
      ];
  
      return (
        <div>
          <Dialog
            title={this.props.title}
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.handleClose}
            autoScrollBodyContent={true}
          >
          <this.props.content />
          </Dialog >
        </div>
      );
    }
  }

  export default PopUp;