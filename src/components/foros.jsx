
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


class foros extends React.Component {	
	
	    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    
	render() {
		return (
		<section>
		<h1> Foros </h1>
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
        <TableHeaderColumn>Tema</TableHeaderColumn>
        <TableHeaderColumn>Descripcion</TableHeaderColumn>
        <TableHeaderColumn>Por</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    
      <TableRow  >
        <TableRowColumn>mal funcionamiento</TableRowColumn>
        <TableRowColumn>normal</TableRowColumn>
        <TableRowColumn>Skinet</TableRowColumn>
      </TableRow>

      <TableRow  >
        <TableRowColumn>mal funcionamiento</TableRowColumn>
        <TableRowColumn>normal</TableRowColumn>
        <TableRowColumn>Skinet</TableRowColumn>
      </TableRow>
      
       <TableRow  >
        <TableRowColumn>mal funcionamiento</TableRowColumn>
        <TableRowColumn>normal</TableRowColumn>
        <TableRowColumn>Skinet</TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
   <br/>
   <br/>
   <br/>
    <RaisedButton onClick={()=>{window.location='/prueva'}} label="agregar" />
    <RaisedButton onClick={()=>{window.location='/prueva'}} label="volver" />
		</section>);
	}
}

export default foros;
