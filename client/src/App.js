import React, { Component } from 'react';
import './App.css';
import SocialMedia from './components/SocialMedia'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialMedia />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
