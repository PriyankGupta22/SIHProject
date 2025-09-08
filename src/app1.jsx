import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "../src/Component/Login/Login.jsx"
import CoverCard from './Component/Login/CoverCard/CoverCard.jsx'
import LandingPage from './Component/Login/LandingPage/LandingPage.jsx'
import FinalDestination from './Component/Destinations/finalDestination.jsx'
import Footer from './components/Footer.jsx'
import Card from "./Components/Card.jsx"

import './App.css'
import Signup from './components/signup.jsx'

function App() {
  return (
  <div>
    <LandingPage/>
    <FinalDestination/>
    <Card/>
    <Footer/> 
    <Login/>
    <Signup/> 
  </div>
  )
}

export default App
