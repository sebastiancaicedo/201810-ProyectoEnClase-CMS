
import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

class Cursos extends React.Component {	
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    
	render() {
		return (
		<section>
		<h1> Cursos </h1>
			<TextField 
				hintText="Buscar"
             	floatingLabelText="Buscar"
				name="Buscar" 
				onChange={this.handleChange} 
				type="Buscar" />
				<br />
				<br />
		  
	<Table >
    <TableHeader displaySelectAll={false}  adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Nombre curso</TableHeaderColumn>
        <TableHeaderColumn>Integrantes</TableHeaderColumn>
         <TableHeaderColumn>descripción</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    
      <TableRow  >
        <TableRowColumn>matematicas</TableRowColumn>
        <TableRowColumn>10</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
      </TableRow>

      <TableRow  >
        <TableRowColumn>matematicas</TableRowColumn>
        <TableRowColumn>10</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
      </TableRow>
      
       <TableRow  >
        <TableRowColumn>matematicas</TableRowColumn>
        <TableRowColumn>10</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
  <br/>
  <br/>
  <br/>
  {
    this.props.loggedUser.role === 'admin'?
    <div>
      <RaisedButton onClick={()=> {this.props.history.push('/prueba')}} label="agregar" />
      <RaisedButton onClick={()=> {this.props.history.push('/prueba')}} label="editar" />
      <RaisedButton onClick={()=> {this.props.history.push('/prueba')}} label="borrar" />
      <RaisedButton onClick={()=> {this.props.history.push('/prueba')}} label="archivo" />
    </div>
    :
    <span></span>
  }
		</section>);
	}
}

export default Cursos;
