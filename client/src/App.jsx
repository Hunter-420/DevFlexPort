import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";

const Home = () => <h1>Home Page</h1>;
const EditorPage = () => <h1>Editor Page</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
