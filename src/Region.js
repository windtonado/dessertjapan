import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Region1 extends Component {
    render() {
        return (
            <div className="Region1">

                <div class="row" id="banner">
                    <div class="col-6 col-6-md4" id="reg">
                    <Link to='/Hokkaido2'><img src="hokkaido.jpg" class="img-thumbnail" alt="Responsive image" /></Link>
                    </div>
                    <div class="col-6 col-6-md4" id="reg">
                    <Link to='/Kyushu2'><img src="Kyushu.jpg" class="img-thumbnail" alt="Responsive image" /></Link>
                    </div>
                    <div class="row" ></div>
                    <div class="col-6 col-6-md4" id="reg">
                    <Link to='/Kansai2'><img src="kansai.jpg" class="img-thumbnail" alt="Responsive image" /></Link>
                    </div>
                    <div class="col-6 col-6-md4" id="reg">
                    <Link to='/Kanto2'><img src="banner kanto.jpg" class="img-thumbnail" alt="Responsive image" /></Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Region1;