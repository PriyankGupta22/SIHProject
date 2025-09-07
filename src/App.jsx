import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "../src/Component/Login/Login.jsx"
import CoverCard from './Component/Login/CoverCard/CoverCard.jsx'
import LandingPage from './Component/Login/LandingPage/LandingPage.jsx'
import FinalDestination from './Component/Destinations/finalDestination.jsx'

import './App.css'


function App() {
  return (
  <div>
    <LandingPage/>
    <FinalDestination/>
  </div>
  )
}

export default App
