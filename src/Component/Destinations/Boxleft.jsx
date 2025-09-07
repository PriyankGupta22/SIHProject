import React from 'react'
import './finalDestination.css'
import './Boxleft.css'
import star from '../../assets/star.svg'
import locbox from '../../assets/locbox.svg'
import clock from '../../assets/clock.svg'


function Box({
  backImg,
  location,
  rating,
  type,
  time,
  title,
  titlediscription
}) {
  return (
    <div className="picleft">
      <div className="boxDiv" style={{backgroundImage:`url(${backImg})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="toploc">
        <div className="boxloc">
          <div className="boxlocpic">
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
    <div className="path" style={{backgroundColor:'#65A14E'}}>

    </div>
    <div className="boxInfo">
        <div className="boxInfotitle">
          {title}
        </div>
        <div className="boxInfocont">
          {titlediscription}
        </div>

    </div>
    </div>
  )
}

export default Box
