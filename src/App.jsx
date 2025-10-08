import React from 'react'
import Header from './components/Header'
import Games1 from './components/Games1'
import Games2 from './components/Games2'
import Home from './components/Home'
import Games from './components/Games'
import Upgames from './components/Upgames'
import Gbrand from './components/Gbrand'
import {Routes,Route} from 'react-router-dom'
// import GamingBrands from './components/demo'

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
      {/* <GamingBrands/> */}
        </>}/>
        <Route path='/Games1' element={<Games1/>}/>
        <Route path='/Games2' element={<Games2/>}/>
      </Routes>
    </div>
  )
}

export default App;