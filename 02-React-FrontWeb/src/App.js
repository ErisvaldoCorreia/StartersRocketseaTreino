import React, { Component } from 'react';
import './styles.css';

import Header from './components/Header/';
import Main from './pages/main';

export default class App extends Component {
 
  render() {
    return (

      <div className="App">
        <Header />
        <Main />
      </div>

    );
  }

}

