import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/editor" element={<h1>Hello</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
