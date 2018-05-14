
import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import {Route} from 'react-router-dom';

import {
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

import {saveNewCourseInDb, getCourses, saveCourseInDb, deleteCourseById} from './../API/api.js';
import {Link} from 'react-router-dom';

import PopUp from './popup.js';
import { FlatButton } from 'material-ui';
import Paper from 'material-ui/Paper/Paper';

import Course from './course.js';



const AddCourseForm = (props)=>{

  return(
    <form>
        <div className='form-group'>
        <TextField
          id='tfCourseName'
          name='courseName'
          onChange={props.handleChange}
          hintText = {props.courseAction === 'edit'?props.editingCourse.name : 'Type course name'}
          floatingLabelText = 'Course Name'
          style={{width:'100%'}}/>

        <TextField
          id='tfCourseDescription'
          name='courseDescription'
          onChange={props.handleChange}
          hintText = {props.courseAction === 'edit'?props.editingCourse.description : 'Type course description'}
          floatingLabelText = 'Course Description'
          style={{width:'100%'}}
          />
        </div>
    </form>
  );
}

const DeleteConfirmationMessage = (props)=>{
  return(
    <p>Confirm delete action?</p>
  )
}

const CourseMenu = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton onClick={props.onOptionClick}><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem onClick={(e)=> props.onMenuItemClick(e, 'edit')} primaryText="Edit" rightIcon={<FontIcon className='material-icons'>settings</FontIcon>}/>
    <Divider/>
    <MenuItem onClick={(e)=> props.onMenuItemClick(e, 'delete')} value='delete' primaryText="Delete" rightIcon={<Delete />} />
  </IconMenu>
);

class Cursos extends React.Component {

  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.onDialogSubmit = this.onDialogSubmit.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);

    this.state = {

      searchString: null,
      dialogOpen: false,
      courses: [],
      selectedCourse: null,
      courseAction: null
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
      });
  }

  openDialog(){
    this.setState({
      dialogOpen: true
    });
  }

  closeDialog(){
    this.setState({
      dialogOpen: false,
      courseAction: null,
      selectedCourse: null
    });
  }

  onDialogSubmit(e){
    e.preventDefault();

    if(this.state.courseAction !== 'delete'){
    
    const courseName = document.getElementById("tfCourseName").value;
    const courseDescription = document.getElementById("tfCourseDescription").value;

    let _course;

    if(this.state.courseAction === null){

      _course = {

        name: courseName,
        participants: 0,
        description: courseDescription
      }

      saveNewCourseInDb(_course)
      .then(result => {
        console.log(result);
        console.log('curso guardado');

      })

      .catch(error =>{
        console.log(error);
        
      })
    }
    else
      if(this.state.courseAction === 'edit'){

        _course = {
          id: this.state.selectedCourse.id,
          name: courseName === ''? this.state.selectedCourse.name : courseName,
          participants: this.state.selectedCourse.participants,
          description: courseDescription === ''? this.state.selectedCourse.description : courseDescription
        }

        saveCourseInDb(_course)
        .then(result =>{
          console.log(result);
          console.log('course updated');
          
        })

        .catch(error=>{
          console.log(error);
        })


      }
    }
    else
      if(this.state.courseAction === 'delete'){

        deleteCourseById(this.state.selectedCourse.id)
        .then(result =>{
          console.log(result);
          console.log('course deleted');          
        })

        .catch(error =>{
          console.log(error);
          
        })
        
      }
    
      this.closeDialog();
  
  }

  onMenuItemClick(e, action){
    
    this.setState({
      courseAction: action
    })

    this.openDialog()

    console.log(action);
    console.log(this.state.selectedCourse);
    
    
  }

  componentDidMount(){

    getCourses()
    .then(_courses=> {
      console.log(_courses);
      this.setState({
        courses: _courses
      })
      
    })
  }


    
	render() {
		return (
		<section>
		<h1> Courses </h1>
    <TextField 
      hintText="Search courses"
      floatingLabelText="Search"
      name="searchString"
      onChange={this.handleChange} 
      type="Search" />
      <br />
      <br />
		{
      this.props.loggedUser.role === 'admin'?

      <Table>
      <TableHeader deselectOnClickaway={true} showRowHover= {false} selectable ={true} displaySelectAll={false}  adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Course Name</TableHeaderColumn>
          <TableHeaderColumn>Participants</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Options</TableHeaderColumn>
        </TableRow>
      </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {
          this.state.courses.map(course => {
            if(this.state.searchString === null){
              return(
                <TableRow key={course.id} hoverable={true}>
                  <TableRowColumn><Link to={`/courses/${course.id}`}>{course.name}</Link></TableRowColumn>
                  <TableRowColumn>{course.participants}</TableRowColumn>
                  <TableRowColumn>{course.description}</TableRowColumn>
                  <TableRowColumn>
                    <CourseMenu onOptionClick={()=> {this.setState({selectedCourse: course})}} onMenuItemClick={this.onMenuItemClick} />
                  </TableRowColumn>
                </TableRow>
              );
            }
            else{
              if(course.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1){
                return(
                  <TableRow key={course.id} hoverable={true}>
                    <TableRowColumn><Link to={`/courses/${course.id}`}>{course.name}</Link></TableRowColumn>
                    <TableRowColumn>{course.participants}</TableRowColumn>
                    <TableRowColumn>{course.description}</TableRowColumn>
                    <TableRowColumn>
                      <CourseMenu onOptionClick={()=> {this.setState({selectedCourse: course})}} onMenuItemClick={this.onMenuItemClick} />
                    </TableRowColumn>
                  </TableRow>
                );
              }
            }
          })
        }
        </TableBody>
      </Table>

      :

      <Table >
        <TableHeader deselectOnClickaway={true} showRowHover= {false} selectable ={true} displaySelectAll={false}  adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Course Name</TableHeaderColumn>
            <TableHeaderColumn>Participants</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {
          this.state.courses.map(course => {
            if(this.state.searchString === null){
              return(
                <TableRow key={course.id} hoverable={true} >
                  <TableRowColumn><Link to={`/courses/${course.id}`}>{course.name}</Link></TableRowColumn>
                  <TableRowColumn>{course.participants}</TableRowColumn>
                  <TableRowColumn>{course.description}</TableRowColumn>
                </TableRow>
              );
            }
            else{
              if(course.name.toLowerCase().indexOf(this.state.searchString) > -1){
                return(
                    <TableRow key={course.id} hoverable={true} >
                      <TableRowColumn><Link to={`/courses/${course.id}`}>{course.name}</Link></TableRowColumn>
                      <TableRowColumn>{course.participants}</TableRowColumn>
                      <TableRowColumn>{course.description}</TableRowColumn>
                    </TableRow>
                );
              }
            }
          })
        }
        </TableBody>
      </Table>
    }
    <br/>
    <br/>
    <br/>
    {
      this.props.loggedUser.role === 'admin'?
      <div>
        <RaisedButton primary={true} onClick={this.openDialog} label="Add" />
        <PopUp content={()=> this.state.courseAction === 'delete'? <DeleteConfirmationMessage /> : <AddCourseForm courseAction={this.state.courseAction} editingCourse={this.state.selectedCourse} />} 
                title={this.state.courseAction === 'delete'? 'Delete Course' : `Save ${this.state.courseAction === 'edit'? this.state.selectedCourse.name : 'New'} Course`}
                open={this.state.dialogOpen} onSubmit={this.onDialogSubmit} 
                handleClose={this.closeDialog} 
                submitButtonText= {this.state.courseAction === 'delete'? 'Confirm' : 'Save'}
        />
      </div>
      :
      <span></span>
    }  
    </section>
    );
	}
}

export default Cursos;
