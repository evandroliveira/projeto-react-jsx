import React, { Component } from 'react';

import {Link, Route} from  'react-router-dom';

const TAREFAS = [
    {
    id: 1,
    titulo: 'Aprender React',
    descricao: 't only five centuries, but also the leap into electronic typesetting, remaining esse'
    },

    {
        id: 2,
        titulo: 'Aprender Router',
        descricao: 't only five centuries, but also the  remaining esse'
    },

    {
        id: 3,
        titulo: 'Aprender JavaScript',
        descricao: 't only five centuries, '
    }
]

class TarefasPage extends Component {
    render() {
        const tarefasLinks = TAREFAS.map((tarefa, index) => {
            return(
                <li key={tarefa.id}>
                    <Link 
                        to={'/tarefas/' + tarefa.id}>{tarefa.titulo}
                    </Link>
                </li>
            )
         })
        return (
            <div>
                <h1>Tarefas</h1>
                    
                <ul>                    
                       {tarefasLinks}                    
                </ul>
                <Route 
                    path="/tarefas/:tarefaId"
                    render={props => {
                        const tarefaId = Number(props.match.params.tarefaId);
                        const tarefa = TAREFAS.find(tar => tar.id === tarefaId);
                        return (
                            <div>
                                {tarefa.descricao}
                            </div>
                        )
                    }}
                 />                
            </div>
        )
    }
}

export default TarefasPage;