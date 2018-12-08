import React, { Component } from 'react';
import { Alert, Button 
} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Alert color= "success">Olá Mundo!</Alert>
                 <Alert color= "danger"> Olá Mundo!</Alert>
                 <Button color= "success">Enviar</Button>
                 <Button color= "danger">Cancelar</Button>
          <Artigo nome="Evandro"texto="Professor"> </Artigo>
          <Artigo nome="China"texto="torrone"> </Artigo>
          
          <div className="cont"><Contador tempo={500} /></div>
          <Contador tempo={700} />
            </div>
        )
    }
}



export default HomePage;