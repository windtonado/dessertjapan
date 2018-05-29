import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from './Carousel';
import Region1 from './Region';
import Review1 from './Review'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home1 extends Component {
  render() {
    return (
      <div className="Home1">



        <Carousel1 />

        <nav class="row" id="space" />

        <div class="container">
          <div class="row" id="line">
            <div class="col" >
              <nav class="navbar2 navbar-expand-lg navbar-light " />
            </div>
            <div class="col-2">
              <a class="text" >Resent Review</a>
            </div>
            <div class="col" >
              <nav class="navbar3 navbar-expand-lg navbar-light " />
            </div>
          </div>
          <Review1 />
          </div>

          
          <nav class="row" id="space" />
        <div class="container">
          <div class="row" id="line">
            <div class="col" >
              <nav class="navbar2 navbar-expand-lg navbar-light " />
            </div>
            <div class="col-2">
              <a class="text" >Region</a>
            </div>
            <div class="col" >
              <nav class="navbar3 navbar-expand-lg navbar-light " />
            </div>
          </div>
          <Region1 />
          </div>





      </div>

    );
  }
}

export default Home1;
