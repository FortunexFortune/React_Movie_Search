import React, { Component } from 'react';
import logo from './img1.png';
import './App.css';
import Search from './Search';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Movie Searcher
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>... I am looking for ... </h2>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;
