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
            {
                this.props.loggedUser.role === 'admin'?
                <Tabs>
                    <Tab label="Courses" >
                        <Cursos {...this.props} />
                    </Tab>
                    <Tab label="Users" >
                        <Usuarios {...this.props} />
                    </Tab>
				</Tabs>
                :
                <Cursos {...this.props} />
            }
            </div>
        );
    }
}

export default Home;