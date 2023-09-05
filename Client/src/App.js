import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from  "./Components/Navbar";

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" />
          <Route path="/sponsors" />
          <Route path="/contact" />
          <Route path="/login" />
        </Routes>
      </Router>
  );
}

export default App;
