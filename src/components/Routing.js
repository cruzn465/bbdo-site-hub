import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Work from "./Work";
import Team from "./Team";
import Collective from "./Collective";
import CurrentMember from "./CurrentMember";

function Routing() {
  return (
    <Routes>
      <Route path="the-work" element={<Work />} />
      <Route path="the-team" element={<Team />} />
      <Route path="the-collective" element={<Collective />}>
        {/* <Route path="/:memId" element={<CurrentMember />} /> */}
        <Route path=":id" element={<CurrentMember />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routing;
