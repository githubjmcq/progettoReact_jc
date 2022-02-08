import React, { Component } from 'react';
import './App.css';
import {Head} from "./components/head/head";
import {Results} from "./components/results/results";

class App extends Component {

  render(){
    return (
      <div className="App">
        <Head />
        <Results />
      </div>
    );
  }

}

export default App;
