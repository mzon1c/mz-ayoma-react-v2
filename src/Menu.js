import React, { Component } from 'react';
import './index.css';


class Menu extends Component {

    constructor(){
      super();
      this.state={count:0};

    }




    increment=() =>{this.setState({ count:this.state.count+1});}

    render(){
      var x=[10];
      var pathArray = window.location.pathname.split( '/' );
      if(pathArray[1]==="")
      x[0]="selected";
      else if(pathArray[1]==="products")
      x[1]="selected";
      else if(pathArray[1]==="about")
      x[2]="selected";
      return(


         <div>


      <ul id="navigation">
        <li class={x[0]}>
          <a href="/">Home</a>
        </li>
        <li class={x[1]}>
          <a href="/products">Products</a>
        </li>
        <li class={x[2]}>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      </div>



      );


    }


}





export default Menu;
