import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import Nav from "./components/Nav";


// Pages

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <br/>
    <br/>
    <br/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
