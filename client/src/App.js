import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path='/Reservation' component={Reservation} />
  				<Route path='/Menu' component={Menu} />
  				<Route path='/About' component={About} />
  				<Route path='/Contact' component={Contact} />
        <MainImage />
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App;
