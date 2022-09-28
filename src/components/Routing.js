import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Work from "./Work";
import Team from "./Team";
import Collective from "./Collective";
import CurrentMember from "./CurrentMember";
import { useLocation } from "react-router-dom";

function Routing({ setLocation }) {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  // console.log(location);
  setLocation(location);

  return (
    <Routes>
      <Route path="the-work" element={<Work />} />
      <Route path="the-team" element={<Team />} />
      <Route path="the-collective" element={<Collective />}>
        {/* <Route path="/:memId" element={<CurrentMember />} /> */}
        <Route path=":slug" element={<CurrentMember />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routing;
