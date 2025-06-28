import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import Square from './components/Square'

function App() {


  return (
    <>
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
      <GameInfo />
       <Square />
    </div>
   
    </>
  )
}

export default App
