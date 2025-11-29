import React from 'react'
import img1 from '../assets/gta5.jpg'
import img2 from '../assets/counter-strike.jpg'
import img3 from '../assets/left4dead2.jpg'
import img4 from '../assets/bioshock.jpg'
import img5 from '../assets/thewitcher.jpg'
import img6 from '../assets/payday.jpg'
import { useNavigate } from 'react-router-dom'
function Games() {
  const navgate = useNavigate();
  return (
    <div className="album py-5 bg">
    <div className="container">
      <h1 className=''>Games</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games1/"><img className="bd-placeholder-img card-img-top" src={img1} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">Grand Thief Auto V</h3>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games2/"><img className="bd-placeholder-img card-img-top" src={img2} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">Counter Strike</h3>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games3/"><img className="bd-placeholder-img card-img-top" src={img3} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">Left 4 Dead 2</h3>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games4/"><img className="bd-placeholder-img card-img-top" src={img4} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">Bioshock Infinite: Clash </h3>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games5/"><img className="bd-placeholder-img card-img-top" src={img5} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">The Witcher 3: Wild Hunt</h3>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
           <a href="/Games6/"><img className="bd-placeholder-img card-img-top" src={img6} width="100%" height="225"></img></a>

            <div className="card-body">
              <h3 className="card-text">PAYDAY 2</h3>
              <div className="d-flex justify-content-end">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Free</button>
                </div>
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
