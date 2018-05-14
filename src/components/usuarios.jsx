
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';

import {
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

import PopUp from './popup.js';
import { getUsers, saveUserInDb } from '../API/api';

const ROLES_TYPES = ['admin', 'user'];
const STATUS_TYPES = ['active', 'desactivated'];

const UserOptions = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton onClick={props.onOptionsMenuClick}><FontIcon className="material-icons center">settings</FontIcon></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  {
    props.options.map((option, index) =>{      
      return(
        <MenuItem key={index} onClick={(e)=> props.onOptionSelected(e, props.field, option)} primaryText={option}/>
      );
    })
  }
  </IconMenu>
);

const ChangeConfirmation = (props)=>{
  return(
    <p>You are changing user '{props.userName}' <strong>{props.changedField}</strong> to <strong>{props.newFieldValue}</strong>.</p>
  )
}




class Usuarios extends React.Component {

  constructor(){
    super()
    this.state = {
      searchString: null,
      users: [],
      dialogOpen: false,
      selectedUser: null,
      changedField: null,
      newFieldValue: null

    }
    this.handleChange = this.handleChange.bind(this);
    this.onOptionSelected = this.onOptionSelected.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.onDialogSubmit = this.onDialogSubmit.bind(this);
  }
	    
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onOptionSelected(e, field, option){
    
    switch(field){
      
      case 'role':
        if(this.state.selectedUser.role !== option){
          console.log('cambio');
          this.openDialog(field, option);
          
        }
        break;
      case 'status':
        if(this.state.selectedUser.status !== option){
          console.log('cambio');
          this.openDialog(field, option);
        }
        break;
      default:
        break;
    } 
  }

  openDialog(fieldChanged, fieldNewValue){
    this.setState({
      dialogOpen: true,
      changedField: fieldChanged,
      newFieldValue: fieldNewValue
    });
  }

  closeDialog(){
    this.setState({
      dialogOpen: false,
      selectedUser: null,
      changedField: null,
      newFieldValue: null
    });
  }

  onDialogSubmit(){
    let _user = {

      id: this.state.selectedUser.id,
      name: this.state.selectedUser.name,
      email: this.state.selectedUser.email,
      role: this.state.selectedUser.role,
      status: this.state.selectedUser.status
    }

    if(this.state.changedField === 'role'){
      _user.role= this.state.newFieldValue
    }
    else
      if(this.state.changedField === 'status'){
        _user.status= this.state.newFieldValue
      }

    saveUserInDb(_user)
    .then(result=>{
      
      console.log('cambios guardados');
      this.closeDialog();
    })

    .catch(error =>{
      console.log(error);
      
    })
    
  }

  componentDidMount(){

    getUsers()
    .then(_users =>{
      this.setState({
        users: _users
      })
    })

    .catch(error => {
      console.log(error);
      
    });
  }
    
	render() {
		return (
      <section>
        <h1> Users </h1>
        <TextField 
          hintText="Search users"
          floatingLabelText="Search"
          name="searchString"
          onChange={this.handleChange} />
        <br/>
        <br/>
        <Table >
          <TableHeader displaySelectAll={false}  adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Role</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          {
            this.state.users.map(user =>{
              if(this.state.searchString === null){
                return(
                  <TableRow key = {user.id} >
                    <TableRowColumn>{user.name}</TableRowColumn>
                    <TableRowColumn>{user.email}</TableRowColumn>
                    <TableRowColumn>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <strong>{user.role}</strong>
                        <UserOptions options={ROLES_TYPES} field='role' onOptionsMenuClick={()=>this.setState({selectedUser: user})} onOptionSelected={this.onOptionSelected} />
                      </div>
                    </TableRowColumn>
                    <TableRowColumn >
                      <div style={{display: 'flex', alignItems:'center'}}>
                        <strong>{user.status}</strong>
                        <UserOptions options={STATUS_TYPES} field='status' onOptionsMenuClick={()=>this.setState({selectedUser: user})} onOptionSelected={this.onOptionSelected} />
                      </div>
                    </TableRowColumn>
                  </TableRow>
                )
              }
              else{
                if(user.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1){
                  return(
                    <TableRow key = {user.id} >
                      <TableRowColumn>{user.name}</TableRowColumn>
                      <TableRowColumn>{user.email}</TableRowColumn>
                      <TableRowColumn>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <strong>{user.role}</strong>
                          <UserOptions options={ROLES_TYPES} field='role' onOptionsMenuClick={()=>this.setState({selectedUser: user})} onOptionSelected={this.onOptionSelected} />
                        </div>
                      </TableRowColumn>
                      <TableRowColumn >
                        <div style={{display: 'flex', alignItems:'center'}}>
                          <strong>{user.status}</strong>
                          <UserOptions options={STATUS_TYPES} field='status' onOptionsMenuClick={()=>this.setState({selectedUser: user})} onOptionSelected={this.onOptionSelected} />
                        </div>
                      </TableRowColumn>
                    </TableRow>
                  )
                }
              }
            })
          } 
          </TableBody>
        </Table>
        <br/>
        <br/>
        <br/>
        <div>
        <PopUp content={()=> <ChangeConfirmation userName={this.state.selectedUser.name} changedField={this.state.changedField} newFieldValue={this.state.newFieldValue} /> }
            open={this.state.dialogOpen}
            title= 'Confirm change action'
            submitButtonText='Confirm'
            handleClose = {this.closeDialog}
            onSubmit={this.onDialogSubmit}
        />
        </div>
      </section>
    );
	}
}

export default Usuarios;
