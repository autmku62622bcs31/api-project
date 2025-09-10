import React from 'react'
import upimg from '../assets/gta6copy1.jpg'
import botimg1 from '../assets/jurassic-world-evo-3.jpg'
import botimg2 from '../assets/LostSoulAside.jpg'
function Upgames() {
  return (
    <div className='upgames'>
        <h1 className='uphead'>Upcoming Games</h1>
      <div className='upgameimg'>
      <img src={upimg} class="img-fluid" alt="..."/>
      <img src={botimg1} class="img-fluid-bot1" alt="..."/>
      <img src={botimg2} class="img-fluid-bot2" alt="..."/>
      </div>
    </div>
  )
}

export default Upgames
