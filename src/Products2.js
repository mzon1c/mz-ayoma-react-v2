import React, { Component } from 'react';
import './index.css';
import './products.css'
import './js/font-awesome.min.css';



class Products2 extends Component {

    constructor(props){
      super(props);




}



    render(){

      const selectsidemenu = (id) => {
    console.log(id);
     
        document.getElementById(id).className="menu-active";
       document.getElementById('prodlist').src="./printers.html";

      }






      return(


        <div class="container">


  	<ul class="puerto-menu" >
  		<li>
  			<a id="0"  onClick={(e)=>selectsidemenu(0)}>


  					<strong>Printers</strong>


  			</a>
  		</li>

  		<li>
  			<a id="1"  onClick={(e)=>selectsidemenu(1)}>


  					<strong>Lamination Machine</strong>


  			</a>
  		</li>
  		<li>
  			<a onClick={(e)=>selectsidemenu(2)} id="2">


  					<strong>Paper Cutter</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a onClick={(e)=>selectsidemenu(3)} id="3">


  					<strong>T-Shirt/Mug</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a  onClick={(e)=>selectsidemenu(4)} class="hover" id="4">


  					<strong>ID Card Products</strong>
  					<small>thisksakjsa</small>

  			</a>
  			<ul>
  				<li><a onClick={(e)=>selectsidemenu("4")}>asdsa</a></li>
  				<li>
  					<a  onClick={(e)=>selectsidemenu("4")} class="hover">uigh</a>
  					<ul>
  						<li><a  onClick={(e)=>selectsidemenu("4")}>assac</a></li>
  						<li>
  							<a  onClick={(e)=>selectsidemenu("4")} class="hover">xcvxcv</a>
  							<ul>
  								<li><a  onClick={(e)=>selectsidemenu("4")}>xvcxcv</a></li>
  								<li><a  onClick={(e)=>selectsidemenu("4")}>xcvxcv</a></li>
  							</ul>
  						</li>
  						<li><a  onClick={(e)=>selectsidemenu("4")}>xvxcv</a></li>
  					</ul>
  				</li>
  				<li><a  onClick={(e)=>selectsidemenu("4")}>vxcvcxv</a></li>
  				<li><a  onClick={(e)=>selectsidemenu("4")}>vcxvcxvcx</a></li>
  			</ul>
  		</li>
  		<li>
  			<a  onClick={(e)=>selectsidemenu(5)} id="5">


  					<strong>Cleaning Tissue</strong>
  					<small>...</small>

  			</a>
  		</li>
  		<li>
  			<a  onClick={(e)=>selectsidemenu(6)} id="6">


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





export default Products2;
