import React from 'react'
import Boxleft from './Boxleft.jsx'
import Boxright from './Boxright.jsx'
import './FinalDestination.css'
import hundru from '../../assets/hundru.png'
import netarhat from '../../assets/netarhat.png'
import dassam from '../../assets/dassam.png'
import belta from '../../assets/belta.png'
import lake from '../../assets/ranchilake.png'
import hills from '../../assets/hills.png'



function FinalDestination() {
  return (
    <div className="mainDest">
      <div className="titleDest">
      <div className="headDest">
          Popular Tourist Destinations
      </div>
      <div className="infoDest">
          <p>Explore the most beautiful and captivating places in Jharkhand. From majestic</p>
          <p>waterfalls to serene hill stations, discover your next adventure.</p>
      </div>
     </div>
     <Boxleft
     backImg={hundru}
     location="Ranchi, Jharkhand"
     type="Waterfall"
     time="2-3 hours"
     rating="4.8"
     title="Hundru Falls"
     titlediscription="A spectacular 98-meter high waterfall, one of the highest waterfalls in Jharkhand. Perfect for nature lovers and adventure seekers."
     />
     <Boxright
     backImg={netarhat}
     location="Latehar, Jharkhand"
     type="Hill Station"
     time="Full Day"
     rating="4.6"
     title="Netarhat Hill Station"
     titlediscription="Known as the 'Queen of Chotanagpur', this hill station offers breathtaking sunrises and cool mountain air"
     />
     <Boxleft
     backImg={dassam}
     location="Taimara, Jharkhand"
     type="Waterfall"
     time="2-3 hours"
     rating="4.7"
     title="Dassam Falls"
     titlediscription="A mesmerizing waterfall cascading from a height of 44 meters, surrounded by dense forests and rocky terrain."
     />
     <Boxright
     backImg={belta}
     location="Latehar, Jharkhand"
     type="Wildlife"
     time="Half Day"
     rating="4.9"
     title="Betla National Park"
     titlediscription="Home to tigers, elephants, and diverse wildlife species. Experience the wild side of Jharkhand."
     />
     <Boxleft
     backImg={lake}
     location="Ranchi, Jharkhand"
     type="Lake"
     time="1-2 hours"
     rating="4.3"
     title="Ranchi Lake"
     titlediscription="A serene artificial lake perfect for boating, morning walks, and peaceful evening moments."
     />
     <Boxright
     backImg={hills}
     location="Ranchi, Jharkhand"
     type="Hill"
     time="1-2 hours"
     rating="4.5"
     title="Tagore Hill"
     titlediscription="A scenic hilltop offering panoramic views of Ranchi city, perfect for sunrise and sunset photography."
     />
    </div>
  )
}

export default FinalDestination
