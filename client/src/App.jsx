import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./pages/home.page";
import Projects from "./pages/projects.page";
import Contacts from "./pages/contacts.page";
import AboutMe from "./pages/aboutMe.page";
import Layout from "./pages/layout.page";
// import './App.css';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout Page_Name={Home} />}> </Route>
        <Route path="/projects" element={<Layout Page_Name={Projects} />}/>
        <Route path="/contacts" element={<Layout Page_Name={Contacts} />}/>
        <Route path="/aboutme" element={<Layout Page_Name={AboutMe} />}/>
      </Routes>
    </Router>
  );
};

export default App;
