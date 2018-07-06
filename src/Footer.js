import React, { Component } from 'react';
import './index.css';

class Footer extends Component {

    constructor(){
      super();
      this.state={count:0};

    }

render(){
      return(

        <div>
          <ul id="links">
            <li>
              <h4>Heading placeholder</h4>
              <ul>
                <li>
                  <a href="index.html" target="_parent">Link Extra Title 1</a>
                </li>
                <li>
                  <a href="index.html">Link Extra Title 1</a>
                </li>
                <li>
                  <a href="index.html">Link Extra Title 1</a>
                </li>
              </ul>
            </li>
            
            <li>
              <h4>Heading placeholder</h4>
              <ul>
                <li>
                  <a href="index.html">Link Extra Title 1</a>
                </li>
                <li>
                  <a href="index.html">Link Extra Title 1</a>
                </li>
                <li>
                  <a href="index.html">Link Extra Title 1</a>
                </li>
              </ul>
            </li>
            <li>
              <h4>Social Links</h4>
              <ul id="connect">
                <li>
                  <a href="" target="_blank" class="twitter">Twitter</a>
                </li>
                <li>
                  <a href="" target="_blank" class="facebook">Facebook</a>
                </li>
                <li>
                  <a href="" target="_blank" class="googleplus">Google +</a>
                </li>
              </ul>
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
