import React, { Component } from 'react';
import './index.css';

class Ahome extends Component {

    constructor(){
      super();
      this.state={count:0};

    }






    render(){

      return(

        <div >


          <h1>More details</h1>
          <div class="section">
            <p class="column2">
              test 1
            </p>
            <p class="column2">
              test 2 </p>
            <h4>tes 2 ~~~~~~~~~~<a href="index.html">click here &gt;&gt;</a></h4>
          </div>
          <ul id="categories" class="section">
            <li>
              <img src="images/gear.png" alt="Img" height="53" width="60"/>
              <h3>Title One</h3>
              <p>
                title 1 content
              </p>
              <a href="index.html" class="select">Select</a>
            </li>
            <li>
              <img src="images/graph.png" alt="Img" height="53" width="60"/>
              <h3>Title Two</h3>
              <p>
              title 2 content
              </p>
              <a href="index.html" class="select">Select</a>
            </li>
            <li>
              <img src="images/globe.png" alt="Img" height="53" width="60"/>
              <h3>Title Three</h3>
              <p>
              title 3 content
              </p>
              <a href="index.html" class="select">Select</a>
            </li>
          </ul>


          <iframe width="99.7%" src="./slidercarousel.html" frameBorder="0"></iframe>

        </div>
      );


    }


}





export default Ahome;
