import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import handleClick from './Menu2';
import Idcard from "./services/Idcard";
import Tag from "./services/Tag";
import Offset from "./services/Offset";
import Coffee from "./services/Coffee";
import Badges from "./services/Badges";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const routes= [
  {
    path:"/services",
    exact: true,
    sidebar: () => <div> </div>,
    main: () => <div><h2>ALL KIND OF PRINTING SERVICES PROVIDED</h2>
    <h3 className="serv-cont">We provide a wide variety of printing services ranging from leaflet printing to ID card printing with various options. You can choose the required service that you wish to seek from us, submit the design file that was made following the provided template and we will deliver the product as fast as we possibly can. You can submit your design along with the quantity and contact details so that we will be able to reach and deliver the product to you.<br/><br/> Happy Shopping! </h3></div>
  },
  {
    path: "/idcard",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div><Idcard/>
    </div>
  },
  {
    path: "/tag",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2><Tag/></h2>
  },
  {
    path: "/offset",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2><Offset/></h2>
  },
  {
    path: "/coffee",
    sidebar: () => <div>coffee!</div>,
    main: () => <h2><Coffee/></h2>
  },
  {
    path: "/badges",
    sidebar: () => <div>badges!</div>,
    main: () => <h2><Badges/></h2>
  }
];

const Services2 = () => (
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
            <Link onClick={(e) => handleClick("2",e)} to="/idcard">ID Card</Link>
          </li>
          <li>
            <Link  to="/tag">Multi Color Lanyard (TAG)</Link>
          </li>
          <li>
            <Link to="/offset">Offset</Link>
          </li>
          <li>
            <Link to="/coffee">Coffee Mug</Link>
          </li>
          <li>
            <Link to="/dome">DOME Stickers</Link>
          </li>
          <li>
            <Link to="/badges">Badges</Link>
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

export default Services2;