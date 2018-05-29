import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Hokkaido1 extends Component {
  render() {
    return (
      <div className="Hokkaido1">




        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Hokkaido</a>
        <nav class="row" id="space" />
        <div class="container">
        <img src="hokkaido.jpg" class="img-thumbnail" alt="Responsive image" id="explain2" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#" >Yubari Melon Pure Jelly</a>
        <img src="explain\H10.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Yamaoyaji</a>
        <img src="explain\H11.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Omochizu</a>
        <img src="explain\H12.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
          </div>

          

      </div>

    );
  }
}

export default Hokkaido1;
