import React from 'react'
import imggame1 from '../assets/gta5.jpg'
function Games2() {
  return (
    <div className='games2'>
      <div>
        <img src={imggame1} class="rounded float-start" alt="..."/>
        <div>
        <h2 className='pubgtext'>PUBG Battlegrounds</h2>
        <p className='pubgpara'>Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds</p>
      </div>
      <div className='pubgp'>
        <span className='free'>Free</span>
        <span className='play'>Multiplayer</span>
      </div>
      <div className='pubgpub'>
        <p>Publisher: KRAFTON</p>
        <p>Publisher: KRAFTON</p>
        <p>Publisher: KRAFTON</p>
      </div>
      </div>
    </div>
  )
}

export default Games2;
