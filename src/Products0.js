import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import handleClick from './Menu2';
import Idcard from "./services/Idcard";
import Tag from "./services/Tag";
import Offset from "./services/Offset";
import Coffee from "./services/Coffee";
import Badges from "./services/Badges";
import Dome from "./services/Dome";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const routes= [
  {
    path:"/products",
    exact: true,
    sidebar: () => <div> </div>,
    main: () => <div><h1>Welcome to Ayoma Classic</h1>
    <h3 className="serv-cont">We have a wide range of printing products in our inventory, all of which you can browse through on this page and place orders </h3><h2>Happy Shopping! </h2></div>
  },
  {
    path: "/printers",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>  <iframe id="prodlist" width="850px" height="500px" src="./printers.html" frameBorder="0"></iframe>
    </div>
  },
  {
    path: "/lamination",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  },
  {
    path: "/papercutter",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  },
  {
    path: "/sublimation",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  },
  {
    path: "/idproducts",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  },
  {
    path: "/cleaningtissue",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  },
  {
    path: "/inks",
    sidebar: () => <div></div>,
    main: () => <div> <h3> No Products Found</h3> </div>
  }
];

const Products = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
       
          marginLeft: "3%",
          width: "20%",
          background: "#fff"
        }}
      >
        <ul  className="puerto-menu" >
          <li>
            <Link onClick={(e) => handleClick("2",e)} to="/printers">Printers</Link>
          </li>
          <li>
            <Link  to="/lamination">Lamination Machine</Link>
          </li>
          <li>
            <Link to="/papercutter">Paper Cutter</Link>
          </li>
          <li>
            <Link to="/sublimation">Sublimation (T-SHIRT/MUG)</Link>
          </li>
          <li>
            <Link to="/idproducts">ID Card Products</Link>
          </li>
          <li>
            <Link to="/cleaningtissue">Cleaning Tissue</Link>
          </li>
          <li>
            <Link to="/inks">Inks</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default Products;