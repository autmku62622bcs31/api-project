import React from 'react'
import Header from './components/Header'
import Games1 from './components/Games1'
import Games2 from './components/Games2'
import Games3 from './components/Games3'
import Games4 from './components/Games4'
import Games5 from './components/Games5'
import Games6 from './components/Games6'
import Home from './components/Home'
import Games from './components/Games'
import Upgames from './components/Upgames'
import Gbrand from './components/Gbrand'
import {Routes,Route} from 'react-router-dom'
import GamingBrands from './components/demo'
// import Details from "./components/Details";
import "./app.css"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<>
      <Home/> 
      <Games/>
      <Upgames/>
      <Gbrand/>
      <GamingBrands/>
        </>}/>
        <Route path='/Games1' element={<Games1/>}/>
        <Route path='/Games2' element={<Games2/>}/>
        <Route path='/Games3' element={<Games3/>}/>
        <Route path='/Games4' element={<Games4/>}/>
        <Route path='/Games5' element={<Games5/>}/>
        <Route path='/Games6' element={<Games6/>}/>
      </Routes>
      
    </div>
  )
}

export default App;