import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar';
import Carousel1 from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Navbar1 />

        <Carousel1 />
        
        </div>
    );
  }
}

export default App;
