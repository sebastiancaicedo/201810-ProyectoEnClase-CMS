
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

class seciones extends React.Component {	
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    
	render() {
		return (
		<section>
		<h1> Sesiones </h1>
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
        <TableHeaderColumn>Numero de sesion</TableHeaderColumn>
         <TableHeaderColumn>Descripción</TableHeaderColumn>
         <TableHeaderColumn>Fecha de creacion</TableHeaderColumn>
         <TableHeaderColumn>Fecha de finalización</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    
      <TableRow  >
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
        <TableRowColumn>17/01/2018</TableRowColumn>
        <TableRowColumn>01/05/2018</TableRowColumn>
      </TableRow>

      <TableRow  >
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
        <TableRowColumn>17/01/2018</TableRowColumn>
        <TableRowColumn>01/05/2018</TableRowColumn>
      </TableRow>
      
       <TableRow  >
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>numerica</TableRowColumn>
        <TableRowColumn>17/01/2018</TableRowColumn>
        <TableRowColumn>01/05/2018</TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
  <br/>
  <br/>
  <br/>
    <RaisedButton onClick={()=>{window.location='/prueva'}} label="agregar nueva sesion" />
    <RaisedButton onClick={()=>{window.location='/prueva'}} label="editar" />
	  <RaisedButton onClick={()=>{window.location='/prueva'}} label="borrar" />
	  <RaisedButton onClick={()=>{window.location='/prueva'}} label="archivo" />
	  <RaisedButton onClick={()=>{window.location='/prueva'}} label="volver" />
		</section>);
	}
}

export default seciones;
