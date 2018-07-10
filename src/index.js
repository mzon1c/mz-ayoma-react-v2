import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Ahome from './Ahome';
import Menu2 from './Menu2'
import Products0 from './Products0';
import Services2 from './Services2';

import './index.css';
import  {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
 <BrowserRouter>
   <div>
   <Route exact path='/' component={Menu2} />
   <Route exact path='/products' component={Menu2} />
   <Route path='/services' component={Menu2} />
   <Route exact path='/idcard' component={Menu2} />
   <Route path='/tag' component={Menu2} />
   <Route path='/offset' component={Menu2} />
   <Route path='/coffee' component={Menu2} />
   <Route path='/dome' component={Menu2} />
   <Route path='/badge' component={Menu2} />
   <Route path='/badge/badge44mm' component={Menu2} />

   <Route path='/contact' component={Menu2} />

   

   </div>
</BrowserRouter>,
 document.getElementById('root'));


 
//ReactDOM.render(<Products2/>,document.getElementById('footer'));


  
  
 