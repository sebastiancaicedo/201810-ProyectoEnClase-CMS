import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import Cursos from './cursos.jsx';
import Usuarios from './usuarios.jsx';
import Secciones from './secciones.jsx'
import Foros from './foros.jsx';
import { logIn } from '../API/api';

class Home extends React.Component{

    render(){
        return(
            <div className='home'>
                {/*<h1>Home auth</h1>*/}
                <Tabs>
                    <Tab label="Cursos" >
                        <Cursos {...this.props} />
                    </Tab>
                    {console.log(this.props.loggedUser.role)}
                    {
                        this.props.loggedUser.role === 'admin'?
                        <Tab label="Usuarios" >
                            <Usuarios {...this.props} />
                        </Tab>
                        :
                        <span></span>
                    }
				</Tabs>
            </div>
        );
    }
}

export default Home;