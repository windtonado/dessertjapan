import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Kanto extends Component {
  render() {
    return (
      <div className="Kanto">



        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Kanto</a>
        <nav class="row" id="space" />
        <div class="container">
        <img src="banner kanto.jpg" class="img-thumbnail" alt="Responsive image" id="explain2" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Banpei</a>
        <img src="explain\CT5.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Anmitsui</a>
        <img src="explain\CT6.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Melon bread</a>
        <img src="explain\CT13.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
          </div>

          

      </div>

    );
  }
}

export default Kanto;
