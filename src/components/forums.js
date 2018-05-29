import React from 'react';
import {getForum, saveForum} from '../API/api.js';
import index from 'material-ui/TextField';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';

class Forums extends React.Component{

    constructor(){
        super();
        this.state = {
            courseId: null,
            sesionName: null,
            forums: [],
            messageInput: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    addMessage(){

        saveForum(this.state.courseId, this.state.sesionName, {title: this.state.messageInput})
        .then(result =>{
            console.log('Agregado');
        })

        .catch(error =>{
            console.log(error);
        })
    }

    componentWillMount(){

        const params = this.props.match.params;
        getForum(params.courseId, params.sesionName)
        .then(result =>{

            this.setState({
                courseId: params.courseId,
                sesionName: params.sesionName,
                forums: result
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.sesionName !== undefined && this.state.courseId !== undefined?
                    <div>
                        <h3>Forums, course {this.state.courseId}, sesion {this.state.sesionName}</h3>
                        <h2>Messages</h2>
                        {
                            this.state.forums.map((message, index) =>{
                                return(
                                    <p key={index}>{message.title}</p>
                                )
                            })
                        }
                        <TextField
                            id='tfaddMessage'
                            name='messageInput'
                            onChange={this.handleChange}
                            hintText = 'Add Message'
                            floatingLabelText = 'Message'/>
                        <RaisedButton primary={true} label='Add Message' onClick={this.addMessage} />
                    </div>

                    :
                    null
                }
            </div>
        );
    }
}

export default Forums;