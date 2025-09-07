import React from 'react'
import back from '../../../assets/back.png'
import './LandingPage.css'
import loc from '../../../assets/loc.png'
import tourismLogo from '../../../assets/tourismLogo.png'

function LandingPage() {
  return (
      <div className="backImg"> 
        <div className="navBar">
            <div>
                <img
                className="tourismLogo"
                src={tourismLogo}
                alt="tourismLogo"
                />
            </div>
            <div className="nav-links">
                    <a href="#homeNav">Home</a>
                    <a href="#placeNav">Destinations</a>
                    <a href="#culture">Culture</a>
                    <a href="#planTrip">Plan Trip</a>
            </div>
            <button className="loginNav">Login</button>
            <button className="loginNav">SignUp</button>
        </div>
        <button  className="discover">
            <div>
                <img
                className="locButton"
                src={loc}
                alt="locationIcon"
                />
            </div>
            <div className="locDisc">
                Government of Jharkhand
            </div>
            <div>

            </div>
        </button>
        <div className="info">
            <div className="titleInfo">
                Discover<br/>
                <p style={{color:"#D3D219"}}>Jharkhand's</p>
                Natural Wonders.
            </div>
            <div className="discInfo">
                 From misty hills and majestic waterfalls to ancient temples and vibrant tribal<br/>traditions,
                 Jharkhand offers a journey 
                 full of wonder. Whether you're seeking peace, thrill, 
                 or cultural connection this land welcomes you with open arms.
            </div>
        </div>
    </div>
  )
}

export default LandingPage
