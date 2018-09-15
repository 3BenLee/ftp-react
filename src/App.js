import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Navbar/Navbar';
import Wrapper from './Wrapper/Wrapper';
import CustomZones from './CustomZones/CustomZones';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper />
      </div>
    )
  }
}

export default App;
