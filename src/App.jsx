import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Games from './components/Games'
import Upgames from './components/Upgames'
import Gbrand from './components/Gbrand'

import "./app.css"

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Games/>
      <Upgames/>
      <Gbrand/>
    </div>
  )
}

export default App;
