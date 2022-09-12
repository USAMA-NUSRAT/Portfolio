import React from 'react'
import Footer from './Footer/Footer'
import Home from './Home'
import "./Profile.css"
import Menuu from './Menu/Menuu'
import {Routes,Route} from 'react-router-dom'
function Profile() {
  return (
    <div  className="home-container">
     
        <Home />
        <Footer />
    </div>
   
  )

}

export default Profile