import React from 'react';

import './../css/centercontainer.css';

class CenterContainer extends React.Component{

    constructor(){
        super();
    }
    
    render(){

        return(
            <div className = 'center-container container-fluid'>
                <div className = 'center-colum'>
                    <div className = 'center-row'>
                        <this.props.Component {...this.props} style = {this.props.style} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterContainer;