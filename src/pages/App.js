import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Artigo from '../componsnts/Artigo';
import Contador from '../componsnts/Contador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Artigo nome="Evandro"texto="Professor"> </Artigo>
        <Artigo nome="China"texto="torrone"> </Artigo>
        
        <div className="cont"><Contador tempo={500} /></div>
        <Contador tempo={700} />

      </div>
    );
  }
}

export default App;
