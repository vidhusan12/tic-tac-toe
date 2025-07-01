import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import Square from './components/Square'

function App() {


  return (
    <>
    <div>
      <Board />
      <GameInfo />
    </div>
   
    </>
  )
}

export default App
