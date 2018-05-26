import React from 'react';

import {getCourseById, saveCourseInDb} from './../API/api.js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';


const SesionMenu = (props) => (
    <IconMenu
      iconButtonElement={
        <IconButton onClick={props.onOptionClick}><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem onClick={(e)=> props.onSesionMenuItemClick(e, 'change-state')} primaryText={props.sesion.isOpen?"Close":"Open"} rightIcon={<FontIcon className='material-icons'>settings</FontIcon>}/>
      
      {
          props.sesionsAmount > 1?
          <div>
              <Divider/>
              <MenuItem onClick={(e)=> props.onSesionMenuItemClick(e, 'delete')} value='delete' primaryText="Delete" rightIcon={<Delete />} />
          </div>
          :
          null
      }
    </IconMenu>
  );



class Course extends React.Component{
    constructor(){
        super();
        this.state = {
            course: null,
            selectedSesionIndex: null
        }
        this.addSesion = this.addSesion.bind(this);
        this.onSesionMenuItemClick = this.onSesionMenuItemClick.bind(this);
    }

    addSesion(){

        const _course = {
            id: this.state.course.id,
            name: this.state.course.name,
            participants: this.state.course.participants,
            description: this.state.course.description,
            sesions: [...this.state.course.sesions, {name: parseInt(this.state.course.sesions[this.state.course.sesions.length-1].name) + 1, isOpen:true}]
        }

        saveCourseInDb(_course)
        .then(result => {
            console.log("sesion added");
            this.setState({course: _course});
        })

        .catch(error=>{
            console.log(error);
            
        })
    }

    onSesionMenuItemClick(e, action){
        if(action === 'change-state'){

            let _course={};
            Object.assign(_course, this.state.course)
            _course.sesions[this.state.selectedSesionIndex].isOpen = !_course.sesions[this.state.selectedSesionIndex].isOpen;
            saveCourseInDb(_course)
                .then(result =>{

                    this.setState({course: _course});
                })

                .catch(error =>{
                    console.log(error);
                    
                })
        }
        else
            if(action === 'delete'){

                let _course={};
                let _sesions = [];
                for (let index = 0; index < this.state.course.sesions.length; index++) {
                    const element = this.state.course.sesions[index];
                    if(index !== this.state.selectedSesionIndex){
                        _sesions.push(element)
                    }
                }
                Object.assign(_course, this.state.course)
                _course.sesions = _sesions;
                
                saveCourseInDb(_course)
                .then(result =>{

                    this.setState({course: _course});
                })

                .catch(error =>{
                    console.log(error);
                    
                })
                
            }
    }


    componentWillMount(){
        
        const courseId= this.props.match.params.courseId;
        getCourseById(courseId)
        .then(_course =>{
            console.log(_course);
            
            this.setState({
                course: _course
            })
        })

        .catch(error =>{
            console.log(error);
            
        })
        
    }

    render(){
        return(
            <div className='course-info'>
            {
                this.state.course !== null?
                <div>
                    <h1>{`Informacion del curso ${this.state.course.id}`}</h1>
                    <p>{this.state.course.name}</p>
                    <p>{this.state.course.participants}</p>
                    <p>{this.state.course.description}</p>
                    <div>
                        <h3>Sesions</h3>
                        {
                            this.props.loggedUser.role === 'admin'?
                                <RaisedButton primary={true} label='Add Sesion' onClick={this.addSesion} />
                            :
                            null
                        }
                        {
                            this.state.course.sesions.map((sesion, index) =>{
                                return(
                                    <div key={index} style={{alignItems:'center'}}>
                                        <RaisedButton secondary={true} label={`sesion ${sesion.name}`} disabled={!sesion.isOpen} />
                                        {
                                            this.props.loggedUser.role === 'admin'?
                                                <SesionMenu sesion={sesion} sesionsAmount={this.state.course.sesions.length} onOptionClick={()=> {this.setState({selectedSesionIndex: index})}} onSesionMenuItemClick={this.onSesionMenuItemClick} />
                                            :
                                            <div>
                                                <br/>
                                            </div>
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default Course;