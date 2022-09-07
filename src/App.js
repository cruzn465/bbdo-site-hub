import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routing from './components/Routing';
import Header from './components/Header';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
