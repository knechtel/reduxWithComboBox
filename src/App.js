import React, { Component } from 'react';
import Planet from './components/Planet';
import Counter from './containers/Counter/Counter';
import './App.css';
import PlanetSearch from './components/PlanetSearch';

class App extends Component {

  state

  render() {
    return (
      <div className="App">
       <Counter />
       <PlanetSearch/>
      </div>
    );
  }
}

export default App;
