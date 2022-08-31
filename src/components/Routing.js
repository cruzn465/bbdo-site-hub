import {
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import Home from './Home';
import Work from './Work';
import Team from './Team';
import Collective from './Collective';

function Routing() {
    return (
        <Routes>
            <Route path="/the-work" element={<Work />} />
            <Route path="/the-team" element={<Team />} />
            <Route path="/the-collective" element={<Collective />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default Routing;
