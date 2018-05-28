import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar1 extends Component {
  render() {
    return (
      <div className="Navbar1">
        <nav class="navbar navbar-expand-lg navbar-light bg-rgb(58, 8, 8)">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul class="nav nav-pills mb-3 justify-content-end " id="pills-tab" role="tablist">
              <li class="nav-item  ">
                <a class="nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">หน้าหลัก</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">ฮอกไกโด</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">คิวชู</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-contact2-tab" data-toggle="pill" href="#pills-contact2" role="tab" aria-controls="pills-contact2" aria-selected="false">คันโต</a>
              </li>
            </ul>
            <div class="tab-content " id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
              <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab">...</div>
            </div>
          </div>

        </nav>

      </div>
    );
  }
}

export default Navbar1;
