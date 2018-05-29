import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Kyushu1 extends Component {
  render() {
    return (
      <div className="Kyushu1">



        <nav class="row" id="space" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Kyushu</a>
        <nav class="row" id="space" />
        <div class="container">
        <img src="Kyushu.jpg" class="img-thumbnail" alt="Responsive image" id="explain2" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Pururun ichigo mochi</a>
        <img src="explain\CSH7.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Sukushi mochi</a>
        <img src="explain\CSH8.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
        <nav class="row" id="space" />
        <a class="navbar-brand" href="#">Crunchey bar</a>
        <img src="explain\CSH9.jpg" class="img-thumbnail" alt="Responsive image" id="explain" />
          </div>

          

      </div>

    );
  }
}

export default Kyushu1;
