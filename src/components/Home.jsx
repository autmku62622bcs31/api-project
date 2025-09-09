import React from 'react';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
import img1 from '../assets/pubg.jpg'
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
    <div className='pk'>
      <img src={img1} class="img-fluid1" alt="..."/>
      <img src={img2} class="img-fluid2" alt="..."/>
      <img src={img3} class="img-fluid3" alt="..."/>
      <img src={img4} class="img-fluid4" alt="..."/>
    </div>
)
}

export default Home;
