import React, { Component } from 'react';
import './styles.css';

import Header from './components/Header/';
import Routes from './routes';

export default class App extends Component {
 
  render() {
    return (

      <div className="App">
        <Header />
        <Routes />
      </div>

    );
  }

}

