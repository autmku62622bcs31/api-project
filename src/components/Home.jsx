import React from 'react';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
import img1 from '../assets/pubgbattle.webp'
import img2 from '../assets/godofwar2.jpg'
import img3 from '../assets/overwatch.jpg'
import img4 from '../assets/redretemption.jpg'

function Home() {
//     const [foodData, setFoodData] = useState([]);

// const getMeals = async () => {
//     const Response = await axios.get("https://www.freetogame.com/api/games?platform=pc")
//     console.log(Response.data)
// }
// useEffect(()=>{
//     getMeals();
// },[])

// return(
//     <div>
//         {foodData.map((meals)=>{
//             return(
//                 <div>
//                     <h1>{meals.slug}</h1>
//                     <img src={meals.background_image} height={200} width={200} alt="" />
//                 </div>
//             )
//         })}
//     </div>
// )

  return (
<div className="pk">
  <a href="/pubg" className="img-box">
    <img src={img1} className="img-fluid1" alt="PUBG" />
    <div className="overlay">PUBG</div>
  </a>

  <a href="/godofwar" className="img-box">
    <img src={img2} className="img-fluid2" alt="God of War" />
    <div className="overlay">God of War</div>
  </a>

  <a href="/overwatch" className="img-box">
    <img src={img3} className="img-fluid3" alt="Overwatch" />
    <div className="overlay">Overwatch 2</div>
  </a>

  <a href="/red" className="img-box">
    <img src={img4} className="img-fluid4" alt="Red Dead" />
    <div className="overlay">Red Dead Redemption</div>
  </a>

</div>


)
}

export default Home;
