// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Routing from "./components/Routing";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className="App">
      <Container fluid className="bg"></Container>
      <div className="spacer"></div>
      <Container className="all-content">
        <Router basename="/">
          <Header />
          <Routing />
        </Router>
      </Container>
    </div>
  );
}

export default App;
