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


          
      
         
          <ul id="categories">
            <li>
              <h2>Get it Printed!</h2>
              <p>
              Upload your design and we will get it printed according to your specifications in the shortest time possible
              </p>
              <a href="" class="buttons">Submit Design</a>
            </li>
            <li>
           
              <h2>All the supplies you need</h2>
              <p>
              All the supplies you need ranging from different types of inks to all sorts of printing equipment as well as printing materials and its stationary items. 
              </p>
              <a href="" class="buttons"> Products</a>
            </li>
            <li>
             
              <h2>Feel free to contact us</h2>
              <p>
              We provide you with the top-quality services that is both affordable and reasonable for the customer and ensures fast delivery of our services
              </p>
              <a href="tel:+91-9847404373" class="buttons">Contact</a>
            </li>
          </ul>
         
          <br/>
          <hr width="90%"/>
          <br/>
          <h1>Dealers of</h1>
          <iframe id="sliderlog" scrolling="no" width="99.7%" src="./slidercarousel.html" frameBorder="0"></iframe>
         
        </div>
      );


    }


}





export default Ahome;
