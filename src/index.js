import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Footer from './Footer';
import Ahome from './Ahome';
import Menu2 from './Menu2'
import Products2 from './Products2';

import './index.css';
import  {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
 <BrowserRouter>
   <div>
   <Route exact path='/' component={Menu2} />
   <Route exact path='/products' component={Menu2} />
   <Route path='/services' component={Menu2} />
   <Route path='/contact' component={Menu2} />

   </div>
</BrowserRouter>,
 document.getElementById('root'));


 
//ReactDOM.render(<Products2/>,document.getElementById('footer'));


  
  
 