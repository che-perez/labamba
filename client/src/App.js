import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainImage />
        <Footer />
      </div>
    )
  }
}

export default App;
