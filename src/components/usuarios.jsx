
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';


class Usuarios extends React.Component {	
	
	    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    
	render() {
		return (
		<section>
		<h1> Usuarios </h1>
			<TextField 
				hintText="Buscar"
             	floatingLabelText="Buscar"
				name="Buscar" 
				onChange={this.handleChange} 
				type="Buscar" />
				<br/>
		    <br/>
	<Table >
    <TableHeader displaySelectAll={false}  adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>E-mail</TableHeaderColumn>
        <TableHeaderColumn>Apellido</TableHeaderColumn>
        <TableHeaderColumn>E-mail</TableHeaderColumn>
        <TableHeaderColumn>Estatus</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    
      <TableRow  >
        <TableRowColumn>John</TableRowColumn>
        <TableRowColumn>Smith</TableRowColumn>
        <TableRowColumn>normal@coso.com</TableRowColumn>
        <TableRowColumn>activado</TableRowColumn>
      </TableRow>

      <TableRow  >
        <TableRowColumn>John</TableRowColumn>
        <TableRowColumn>Smith</TableRowColumn>
        <TableRowColumn>normal@coso.com</TableRowColumn>
        <TableRowColumn>activado</TableRowColumn>
      </TableRow>
      
       <TableRow  >
        <TableRowColumn>John</TableRowColumn>
        <TableRowColumn>Smith</TableRowColumn>
        <TableRowColumn>normal@coso.com</TableRowColumn>
        <TableRowColumn>activado</TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
   <br/>
   <br/>
   <br/>
    <RaisedButton onClick={()=>{this.props.history.push('/prueba')}} label="crear nuevo usuario" />
	<RaisedButton onClick={()=>{this.props.history.push('/prueba')}} label="desactivar" />
	<RaisedButton onClick={()=>{this.props.history.push('/prueba')}} label="editar" />
		</section>);
	}
}

export default Usuarios;
