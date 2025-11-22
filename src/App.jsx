import React from 'react'
import Games1 from './components/Games1'
import Games2 from './components/Games2'
import Games3 from './components/Games3'
import Games4 from './components/Games4'
import Games5 from './components/Games5'
import Games6 from './components/Games6'
import Pubg from './components/Pubg'

import {Routes,Route} from 'react-router-dom'
// import GamingBrands from './components/demo'
// import Details from "./components/Details";
import "./app.css"
import GodofWar from './components/Godofwar'
import Redretemption from './components/Red'
import Overwatch from './components/Overwatch'
import Gta6 from './components/Gta6'
// import Jurassic from './components/LostsoulAside'
import LostSoulAside from './components/LostsoulAside'
import Callofduty from './components/Callofduty'
// import SlideButton from './components/demo'


import TheMealsdb from "./components/TheMealsDb";
import Signin from "./components/Signup";
import Login from "./components/Login";
import Userdashboard from "./components/Userdashboard";

function App() {
  return (
    <div>
     
      <Routes>
        {/* <Route path='/' element={<>
      
      <GamingBrands/>
        </>}/> */}
        <Route path='/Games1' element={<Games1/>}/>
        <Route path='/Games2' element={<Games2/>}/>
        <Route path='/Games3' element={<Games3/>}/>
        <Route path='/Games4' element={<Games4/>}/>
        <Route path='/Games5' element={<Games5/>}/>
        <Route path='/Games6' element={<Games6/>}/>
        <Route path='/pubg' element={<Pubg/>}/>
        <Route path='/godofwar' element={<GodofWar/>}/>
        <Route path='/red' element={<Redretemption/>}/>
        <Route path='/overwatch' element={<Overwatch/>}/>
        <Route path='/Gta6' element={<Gta6/>}/>
        <Route path='/lostsoulaside' element={<LostSoulAside/>}/>
        <Route path='/callofduty' element={<Callofduty/>}/>

        
        
      
      {/* <SlideButton/> */}

  <Route path="/" element={<Signin/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/view" element={<TheMealsdb/>} />
        <Route path="/user" element={<Userdashboard/>}/>
</Routes>
    
 
      
      
    </div>
  )
}

export default App;