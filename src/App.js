import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './components/Travel';
import Travels from './components/Travels';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travel 
          destination="Cardiff"
          country="England"
          photo="https://i2-prod.walesonline.co.uk/incoming/article6334752.ece/ALTERNATES/s615/tardis.jpg"
          distance="702 km"
        /> 
        <Travel
          destination="Glasgow"
          country="Schotland"
          photo="https://www.gla.ac.uk/media/media_375632_en.jpg"
          distance="1092 km"
        />
        <Travels />
      </div>
    );
  }
}

export default App;
