import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import './Products_list.css';

class Products_list extends Component {

    constructor(){
      super();
      this.state={count:0};



    }





    render(){

      function select() {
        document.getElementById('main-menu').className="sub-menu active";

      }

      function expand(){

        document.getElementById('main-menu').className="sub-menu active";



      }

      function close(){

        document.getElementById('main-menu').className="sub-menu";

      }

      return(

<div>
        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src="/images/glider.jpg" alt="Cinque Terre" width="300" height="200"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>


        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="./images/2.png">
              <img src="images/glider.jpg" alt="Forest" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src="images/jumping.jpg" alt="Northern Lights" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src="images/jumping.jpg" alt="Mountains" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>

</div>

      );


    }


}





export default Products_list;
