import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar1 extends Component {
  render() {
    return (
      <div className="Navbar1">
        <nav class="navbar navbar-expand-lg navbar-light bg-rgb(58, 8, 8) fixed-top">
        <img src="299129e3af223b5f73bf94ebd27fe8c7.png" class="rounded float-left" id="logo"/>
        <Link to='/'><a class="navbar-brand" href="#">DessertJapan</a></Link>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul class="nav  nav-pills  "id="myTab" >
            <Link to='/'><li class="nav-item  ">
              <a class="nav-link  ">หน้าหลัก</a>
              </li></Link>
              <Link to='/Hokkaido2'><li class="nav-item">
              <a class="nav-link active" >ฮอกไกโด</a>
              </li></Link>
              <Link to='/Kyushu2'><li class="nav-item">
                <a class="nav-link" >คิวชู</a>
              </li></Link>
              <Link to='/Kanto2'><li class="nav-item">
                <a class="nav-link" >คันโต</a>
              </li></Link>
              <Link to='/Kansai2'><li class="nav-item">
                <a class="nav-link" >คันไซ</a>
              </li></Link>
            </ul>
            

       
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar1;
