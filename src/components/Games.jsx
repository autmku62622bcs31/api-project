import React from 'react'
import img1 from '../assets/gta5.jpg'
import img2 from '../assets/counter-strike.jpg'
import img3 from '../assets/portal.jpg'
function Games() {
  return (
    <div className='game'>
    <h1 className='gamehead'>GAMES</h1>
    <div className='cards'>
      <div className="card1">
  <img src={img1} height={300} width={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">Grand Thief Auto V</h2>
  </div>
</div>
      <div className="card2">
  <img src={img2} height={300} width={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">Counter Strike</h2>
  </div>
</div>
      <div className="card3">
  <img src={img3} height={300} width={200} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">Portal</h2>
  </div>
</div>
</div>
    </div>
  )
}

export default Games;
