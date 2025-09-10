import React from 'react'
import imggbrand1 from '../assets/Rockstargame.jpeg'
import imggbrand2 from '../assets/Activision.jpeg'
import imggbrand3 from '../assets/unity.png'
import imggtext from '../assets/arrow.png'
function Gbrand() {
  return (
    <div className='gb'>
        <div className='cards'>
            <div className='gbrandcard1'>
                <img className='gbrandimg1' src={imggbrand1} alt="" />
                <h3 className='gbrandtext1'>Rockstar Gaming</h3>
            </div>
            <div className='gbrandcard2'>
                <img className='gbrandimg2' src={imggbrand2} alt="" />
                <h3 className='gbrandtext2'>Activision</h3>
            </div>
            <div className='gbrandcard3'>
                <img className='gbrandimg3' src={imggbrand3} alt="" />
                <h3 className='gbrandtext3'>Unity</h3>
            </div>
            <div className='gbrand-text'>
                <h3>Gaming Brands</h3>
                <img className='gbrandarr' src={imggtext} alt="" />
            </div>
        </div>
    </div>  
    )
}

export default Gbrand;
