import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar';
import Carousel1 from './Carousel';
import Region1 from './Region';
import Review1 from './Review';
import Home1 from './Home';
import Hokkaido1 from './Hokkaido';
import Kansai from './Kansai';
import Kanto from './Kanto';
import Kyushu1 from './Kyushu';
import Matcha from './Matcha'
import Mon from './Mon'
import Anmitsui from './Anmitsui'
import Banpei1 from './Banpei'
import Crunchey from './Crunchey'
import Sukushi1 from './Sukushi'
import Pururun1 from './Pururun'
import Yamaoyaji1 from './Yamaoyaji'
import Yubari from './Yubari'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <Navbar1 />
        


       

        <Route exact path="/" component={Home1} />
        <Route path="/Hokkaido2" component={Hokkaido1} />
        <Route path="/Kansai2" component={Kansai} />
        <Route path="/Kanto2" component={Kanto} />
        <Route path="/Kyushu2" component={Kyushu1} />
        <Route path="/Banpei2" component={Banpei1} />
        <Route path="/Anmitsui2" component={Anmitsui} />
        <Route path="/Crunchey2" component={Crunchey} />
        <Route path="/Matcha2" component={Matcha} />
        <Route path="/Mon2" component={Mon} />
        <Route path="/Pururun2" component={Pururun1} />
        <Route path="/Sukushi2" component={Sukushi1} />
        <Route path="/Yamaoyaji2" component={Yamaoyaji1} />
        <Route path="/Yubari2" component={Yubari} />

        <nav class="row" id="space" />
        <nav class="row" id="space" />
         <nav class="navbar navbar-expand-lg navbar-light bg-rgb(58, 8, 8) "  />
      </div>

    );
  }
}

export default App;
