import React from 'react'
import './finalDestination.css'
import './Boxright.css'
import star from '../../assets/star.svg'
import locbox from '../../assets/locbox.svg'
import clock from '../../assets/clock.svg'
import eye from '../../assets/eye.svg'


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
        <div className="viewButtons" style={{marginTop:10}}>
                  <button className="arview" style={{height:35,width:130,backgroundColor:'white',color:'black',borderRadius:5,border:'2px solid black',display:'flex',justifyContent:'center',alignItems:'center',gap:5}}>
                    <div className="eye">
                      <img style={{height:18,width:18,marginTop:2}} src={eye}/>
                    </div>
                    <div className="arviewInfo" style={{fontSize:13}}>
                      AR/VR Preview
                    </div>
                  </button>
                  <button className="planVisit" style={{height:35,width:130,backgroundColor:'black',color:'white',borderRadius:5,border:0,fontSize:15}}>
                    Plan Visit
                  </button>
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
