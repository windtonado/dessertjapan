import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar1 extends Component {
  render() {
    return (
      <div className="Navbar1">
<nav class="navbar2 navbar-expand-lg navbar-dark bg-brown" />
<nav class="navbar navbar-expand-lg navbar-dark ">

  <a class="navbar-brand" href="#">Japan Dessert</a>
  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">หน้าหลัก <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

         </div>
          );
        }
      }
      
      export default Navbar1;
