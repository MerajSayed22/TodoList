import { useState } from 'react'
import './App.css'
import './index.css'
import Cardtoadd from './components/CardToAdd/Cardtoadd'
import CardtoDisplay from './components/CardtoDisplay/CardtoDisplay'

function App() {
 
 
  return (
    <>
    <div className="TodoList bg-violet-950">
    <h1 className=" text-center text-4xl text-white font-bold py-3">
      My Task Viewer
    </h1>
  </div>
  <Cardtoadd />

    </>
  )
}

export default App
