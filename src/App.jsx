import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login/Login'
import Signup from "./components/signup"


import "./index.css"


function App() {
  

  return (
    <>

<div className='login-pg'>
     <Login/> 

    <Signup/>
   
</div>
    {/* <div className='container'>
     I am a new box 
     Priyanshu Bhadwe :)
    </div> */}
      

    </>
  )
}

export default App
