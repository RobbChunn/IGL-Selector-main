import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./components/Home";
import Duos from "./components/Duos";
import Trios from "./components/Trios";
import BruceBanner from "./components/Banner";

const App = () => {
  return (
    <Router>
      <BruceBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Duos" element={<Duos />} />
        <Route path="/Trios" element={<Trios />} />
      </Routes>
    </Router>
  );
};

export default App;
