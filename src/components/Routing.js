import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Work from "./Work";
import Team from "./Team";
import Collective from "./Collective";
import CurrentMember from "./CurrentMember";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here! (This is also just a testing error page!)</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Routing() {
  return (
    // <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="the-work" element={<Work />} />
      <Route path="the-team" element={<Team />} />
      <Route path="the-collective" element={<Collective />}>
        {/* <Route path="/:memId" element={<CurrentMember />} /> */}
        <Route path=":slug" element={<CurrentMember />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
    // </Router>
  );
}

export default Routing;
