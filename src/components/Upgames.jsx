import React from 'react'
import upimg from '../assets/gta6copy1.jpg'
import botimg1 from '../assets/callofduty.jpg'
import botimg2 from '../assets/LostSoulAside.jpg'
function Upgames() {
  return (
    <div className='upgames'>
        <h1 className='uphead'>Upcoming Games</h1>
      <div className='upgameimg'>
      <a href="/gta6"><img src={upimg} className="img-fluid" alt="..."/></a>
      <a href="/callofduty"><img src={botimg1} className="img-fluid-bot1" alt="..."/></a>
      <a href="/lostsoulaside"><img src={botimg2} className="img-fluid-bot2" alt="..."/></a>
      </div>
    </div>
  )
}

export default Upgames
