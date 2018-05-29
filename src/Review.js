import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Review1 extends Component {
    render() {
        return (
            <div className="Review1">

                <div class="row" id="layoutrew">
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Yubari2'><img src="hokkaido\Yubari Melon Pure Jelly.jpg" class="img-thumbnail" alt="Responsive image" id="review" /></Link>
                    <td>Yubari Melon Pure Jelly</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Yamaoyaji2'><img src="hokkaido\Yamaoyaji.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Yamaoyaji</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Matcha2'><img src="kansai\Matcha langue de chat.jpg" class="img-thumbnail" alt="Responsive image"id="review" /></Link>
                    <td>Matcha langue de chat</td>
                    </div>
                </div>
                <div class="row" id="layoutrew">
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Mon2'><img src="kansai\Mon cher dojima roll.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Mon cher dojima roll</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Banpei2'><img src="kanto\2 japan-magazine.jnto.go.jp.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Banpei</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Anmitsui2'><img src="kanto\anmitsu1.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Anmitsu1</td>
                    </div>
                </div>
                <div class="row" id="layoutrew">
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Crunchey2'><img src="kyushu\สตรอเบอร์รี่ ครั้นชี่ ช็อกโก เล็ต บาร์.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Crunchey bar</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Pururun2'><img src="kyushu\Pururun ichigo mochi.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Pururun ichigo mochi</td>
                    </div>
                    <div class="col-6 col-md-3" id="rew">
                    <Link to='/Sukushi2'><img src="kyushu\sukushi mochi.jpg" class="img-thumbnail" alt="Responsive image" id="review"/></Link>
                    <td>Sukushi mochi</td>
                    </div>
                </div>

            </div>
        );
    }
}

export default Review1;