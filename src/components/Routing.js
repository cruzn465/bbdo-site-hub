import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Work from "./Work";
import Team from "./Team";
import Collective from "./Collective";
import CurrentMember from "./CurrentMember";

function Routing() {
  return (
    // <Router>
    <Routes>
      <Route exact path="/the-work" element={<Work />} />
      <Route exact path="the-team" element={<Team />} />
      <Route path="the-collective" element={<Collective />}>
        {/* <Route path="/:memId" element={<CurrentMember />} /> */}
        <Route path=":slug" element={<CurrentMember />} />
      </Route>
      <Route exact path="/" element={<Home />} />
    </Routes>
    // </Router>
  );
}

export default Routing;
