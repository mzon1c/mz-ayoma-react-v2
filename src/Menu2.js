import React from "react";
import ReactDOM from 'react-dom';
import Ahome from './Ahome';
import './index.css';
import Footer from './Footer';
import Products0 from './Products0';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services2 from './Services2';
import Products2 from './wst_Products2';
import Contact from './Contact';


const handleClick = (id,event) => {
var i;
  for(i=0;i<4;i++)
  {
    document.getElementById(i).className="null";

  }
  console.log(event);

  console.log(id);
  document.getElementById(id).className="selected";


}



const Menu2 = () => (
  <Router>
    <div>
      <div>
      <ul id="navigation">
        <li id="0" onClick={(e) => handleClick("0",e)}>
          <Link to="/">Home</Link>
        </li>
        <li id="1" onClick={(e) => handleClick("1",e)} >
          <Link to="/products">Products</Link>
        </li>
        <li id="2" onClick={(e) => handleClick("2",e)} >
          <Link to="/services">Services</Link>
        </li>
        <li id="3" onClick={(e) => handleClick("3",e)} >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
     
      </div>
         
      <Route exact path="/" component={Ahome} /> 
  
      <Route path="/products" component={Products0}/>

       <Route path="/services" component={Services2}/>
       <Route path="/idcard" component={Services2}/>
       <Route path="/tag" component={Services2}/>
       <Route path="/offset" component={Services2}/>
       <Route path="/coffee" component={Services2}/>
       <Route path="/dome" component={Services2}/>
       <Route path="/badge" component={Services2}/>
       <Route path="/badge/badge44mm" component={Services2}/>

        <Route path="/contact" component={Contact}/>

    
    </div>  
  </Router>
);

ReactDOM.render(<Footer/>,document.getElementById('footer'));
/*
const Home = (
    
  ReactDOM.render(<Ahome/>,document.getElementById('contents')),
    ReactDOM.render(<Footer/>,document.getElementById('footer'))
    
);

const About= (

  ReactDOM.render(<Products/>,document.getElementById('contents')),
    ReactDOM.render(<Footer/>,document.getElementById('footer'))

 
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

*/

export default Menu2;