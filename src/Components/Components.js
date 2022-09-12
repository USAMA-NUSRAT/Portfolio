import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Profile from "./Home/Profile";
import Main from "./Main";
import { useState } from "react";
import Menuu from "./Home/Menu/Menuu";
import { Routes, Route } from "react-router-dom";
function Components() {
    const [act,setactive]=useState(false)
  return (
    <div>
    
        <Menuu />
        <Routes> 
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    
    </div>
  );
}

export default Components;
