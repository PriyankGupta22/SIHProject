import React from 'react'
import './finalDestination.css'
import './Boxright.css'
import star from '../../assets/star.svg'
import locbox from '../../assets/locbox.svg'
import clock from '../../assets/clock.svg'


function Boxright({
  backImg,
  location,
  rating,
  type,
  time,
  title,
  titlediscription
}) {
  return (
    <div className="picright">
    <div className="boxInforight">
        <div className="boxInfotitle">
          {title}
        </div>
        <div className="boxInfocont">
          {titlediscription}
        </div>
    </div>

    <div className="boxDivright" style={{backgroundImage:`url(${backImg})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="toploc">
        <div className="boxloc">
          <div className="boxlocpic" >
              <img src={locbox}/>
          </div>
          <div className="boxlocdisc" style={{color:'#65A14E'}}>
              {location}
          </div>
        </div>
        <div className="boxrate">
          <div className="boxratepic">
              <img src={star}/>
          </div>
          <div className="boxratedisc" style={{color:'white'}}>
                {rating}
          </div>
        </div>
        </div>
        <div className="boxtype" style={{color:'white'}}>
          {type}
        </div>
        <div className="downloc">
        <div className="boxtime">
          <div className="boxtimepic">
              <img src={clock}/>
          </div>
          <div className="boxtimecont" style={{color:'white'}}>
            {time}
          </div>
        </div>
        <div className="boxexp"></div>
        </div>
    </div>
    </div>
  )
}

export default Boxright
