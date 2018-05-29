import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Kansai extends Component {
  render() {
    return (
      <div className="Kansai">



        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Kansai</a>
        <nav class="row" id="space" />
        <div class="container">
        <img src="kansai.jpg" class="img-thumbnail" alt="Responsive image" id="explain2" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Mon cher dojima roll</a>
        <img src="explain\CS1.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Pablo</a>
        <img src="explain\CS2.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Softcream</a>
        <img src="explain\CS3.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Matcha langue de chat</a>
        <img src="explain\CS4.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
          </div>

          

      </div>

    );
  }
}

export default Kansai;
