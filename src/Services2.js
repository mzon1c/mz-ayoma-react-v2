import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const routes= [
  {
    path:"/services",
    exact: true,
    sidebar: () => <div> hehshshshsh</div>,
    main: () => <h2>ksajdnsad</h2>
  },
  {
    path: "/idcard",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <div><iframe width="400" height="550" frameBorder="0"  src="https://script.google.com/macros/s/AKfycbyjZLq7iRxBuV_cuScH8tE5whVQcTsgEx_YnFQUmB89JQZQBWE/exec" sandbox></iframe>
    <img width="400px" height="550px" frameBorder="0"  src=".images/idcard_layout.png" /></div>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
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
            <Link  to="/idcard">ID Card</Link>
          </li>
          <li>
            <Link  to="/bubblegum">Multi Color Lanyard (TAG)</Link>
          </li>
          <li>
            <Link to="/shoelaces">Coffee Mug</Link>
          </li>
          <li>
            <Link to="/shoelaces">Visiting Card</Link>
          </li>
          <li>
            <Link to="/shoelaces">A4 Leaflet</Link>
          </li>
          <li>
            <Link to="/shoelaces">Badges</Link>
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