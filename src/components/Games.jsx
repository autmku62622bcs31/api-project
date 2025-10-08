import React from 'react'
import img1 from '../assets/gta5.jpg'
import img2 from '../assets/counter-strike.jpg'
import img3 from '../assets/portal.jpg'
import img4 from '../assets/tomb-raider.jpg'
import img5 from '../assets/thewitcher.jpg'
import img6 from '../assets/tarisland.jpg'
import { useNavigate } from 'react-router-dom'
function Games() {
  const navgate = useNavigate();
  return (
    <div className="album py-5">
      <div className='albums'>
    <div className="container">
      <h1 className='gamehead'>Games</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card1 shadow-sm">
            <a href="/Games1/"><img className="card-img1" src={img1} width="100%" height="300"></img></a>

            <div className="card-body">
            <h3 className="card-text">Grand Thief Auto V</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card2 shadow-sm">
            <a href="/Games2/"><img className="card-img2" src={img2} width="100%" height="300"></img></a>

            <div className="card-body">
            <h3 className="card-text">Counter Strike</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card3 shadow-sm">
            <img className="card-img3" src={img3} width="100%" height="300"></img>

            <div className="card-body">
            <h3 className="card-text">Portal</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card4 shadow-sm">
            <img className="card-img4" src={img4} width="100%" height="300"></img>

            <div className="card-body">
              <h3 className="card-text">Tomb Raider</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card5 shadow-sm">
            <img className="card-img5" src={img5} width="100%" height="300"></img>

            <div className="card-body">
              <h3 className="card-text">The Witcher</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card6 shadow-sm">
            <img className="card-img6" src={img6} width="100%" height="300"></img>

            <div className="card-body">
              <h3 className="card-text">Tarisland</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
//     <div className='game'>
//     <h1 className='gamehead'>GAMES</h1>
//     <div className='cards'>
//       <div className="card1">
//   <img src={img1} height={300} width={200} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h2 className="card-text">Grand Thief Auto V</h2>
//   </div>
// </div>
//       <div className="card2">
//   <img src={img2} height={300} width={200} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h2 className="card-text">Counter Strike</h2>
//   </div>
// </div>
//       <div className="card3">
//   <img src={img3} height={300} width={200} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h2 className="card-text">Portal</h2>
//   </div>
// </div>
// </div>
//     </div>
  )
}

export default Games;
