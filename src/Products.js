import React, { Component } from 'react';
import logo from './logo.svg';

import './index.css';
import './products.css';
import './js/font-awesome.min.css';



class Products extends Component {

    constructor(props){
      super(props);




}



    render(){

      function selectmenu0(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(0).className="menu-active";
        document.getElementById('prodlist').src="./printers.html";

      }




      function selectmenu1(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(1).className="menu-active";
        document.getElementById('prodlist').src="./index.html";

      }
      function selectmenu2(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(2).className="menu-active";

      }
      function selectmenu3(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(3).className="menu-active";

      }
      function selectmenu4(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(4).className="menu-active";

      }
      function selectmenu5(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(5).className="menu-active";

      }
      function selectmenu6(noo) {
    var i;
      for(i=0;i<=6;i++)
      {
        if((document.getElementById(i).className)===("menu-active"))
    document.getElementById(i).className="menu";
      }
        document.getElementById(6).className="menu-active";

      }





      return(


        <div class="container">


  	<ul class="puerto-menu" >
  		<li>
  			<a id="0" href="javascript:void(0);" onClick={selectmenu0} class="menu-active">


  					<strong>Printers</strong>


  			</a>
  		</li>

  		<li>
  			<a id="1" href="javascript:void(0);" onClick={selectmenu1}>


  					<strong>Lamination Machine</strong>


  			</a>
  		</li>
  		<li>
  			<a href="javascript:void(0);" onClick={selectmenu2} id="2">


  					<strong>Paper Cutter</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="javascript:void(0);" onClick={selectmenu3} id="3">


  					<strong>T-Shirt/Mug</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="javascript:void(0);" onClick={selectmenu4} class="hover" id="4">


  					<strong>ID Card Products</strong>
  					<small>thisksakjsa</small>

  			</a>
  			<ul>
  				<li><a href="javascript:void(0);" onClick={selectmenu4}>asdsa</a></li>
  				<li>
  					<a href="javascript:void(0);" onClick={selectmenu4} class="hover">uigh</a>
  					<ul>
  						<li><a href="javascript:void(0);" onClick={selectmenu4}>assac</a></li>
  						<li>
  							<a href="javascript:void(0);" onClick={selectmenu4} class="hover">xcvxcv</a>
  							<ul>
  								<li><a href="javascript:void(0);" onClick={selectmenu4}>xvcxcv</a></li>
  								<li><a href="javascript:void(0);" onClick={selectmenu4}>xcvxcv</a></li>
  							</ul>
  						</li>
  						<li><a href="javascript:void(0);" onClick={selectmenu4}>xvxcv</a></li>
  					</ul>
  				</li>
  				<li><a href="javascript:void(0);" onClick={selectmenu4}>vxcvcxv</a></li>
  				<li><a href="javascript:void(0);" onClick={selectmenu4}>vcxvcxvcx</a></li>
  			</ul>
  		</li>
  		<li>
  			<a href="javascript:void(0);" onClick={selectmenu5} id="5">


  					<strong>Cleaning Tissue</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a href="javascript:void(0);" onClick={selectmenu6} id="6">


  					<strong>Inks</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a class="search">
  				<input type="text" value="search ..."/>
  				<button><i class="fa fa-search"></i></button>
  			</a>
  		</li>
  	</ul>

<div class="viewprod">

  <h3>hello</h3>

  <iframe id="prodlist" width="850px" height="500px" src="./printers.html" frameBorder="0"></iframe>
</div>



  </div>

      );


    }


}





export default Products;
