import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../index.css';
import '../submenu.css';
import handleClick from '../Menu2';


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
    path: "/mug/11ounce",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div class="sub-sub-view"><iframe sandbox width="100%" height="600px" scrolling="no" frameBorder="0" src="../services/mug/11ouncemug.html"></iframe>
    </div>
  }
];

const Coffee = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
            fontSize: "14px",
          marginLeft: "3%",
          width: "15%",
          background: "#fff"
        }}
      >
        <ul  className="puerto-menu-sub" >
          <li>
            <Link onClick={(e) => handleClick("2",e)} to="/mug/11ounce">Coffee Mug Printing 11ounce ~ 200x90 mm</Link>
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

export default Coffee;