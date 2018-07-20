import React, { Component } from 'react';
import './index.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class Footer extends Component {

    constructor(){
      super();
      this.state={count:0};

    }

render(){
      return(

        <div>
          <ul id="links">
            <li className="footertext">
              <h1>Services</h1>
              <ul>
                <li>
                  <a path="/idcard"  target="">ID Card Printing</a>
                </li>
                <li>
                  <a path="/tag">Lanyard (TAG) Printing</a>
                </li>
                <li>
                  <a path="/offset">Offset (CLUB) Printing</a>
                </li>
                <li>
                  <a path="/coffee">Coffee Mug Printing</a>
                </li>
                <li>
                  <a path="/dome">Dome Sticker Printing</a>
                </li>
                <li>
                  <a path="/badge">Metal Badge Printing</a>
                </li>
              </ul>
            </li>

            <li >

                <div>
                   
                    <img height="auto" width="auto" className="footerlog" src="./images/logo1.png"></img>
                    <h4>Ayoma Classic is the supplier and dealer of most of the major brands of printing equipment and its accessories. We also provide printing servies of various kind, all of which you can browse through this website and place order for the printing service you require.</h4>
                
                  </div>
              </li>
              <li>
                <h1 className="footercon">Contact</h1>
                <h4>Kochi</h4>
              <h2><a href="mailto:ayomaclassic@gmail.com">ayomaclassic@gmail.com</a></h2>
                <h2><a href="tel:+91-484-2398373">+91-484-2398373</a></h2>
                <h2><a href="tel:+91-9847404373"> +91-9847404373</a></h2>
                <h4>Thiruvalla</h4>
                <h2><a href="mailto:ayomathiruvalla@gmail.com">ayomathiruvalla@gmail.com</a></h2>
                </li>
          </ul>

          <p class="footnote">
            © 2018 AYOMA CLASSIC. All rights reserved.
          </p>
        </div>

      );


    }


}
export default Footer;
