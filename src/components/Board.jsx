// HANDLES THE 3X3 GRID CELL
import React, { useState } from 'react'
import Square from './Square';
import '../App.css'

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareClick(index) {
    const newSquares = squares.slice()
    if (newSquares[index]) return; // if the sqaure is already filled do nothing
    if(xIsNext === true){
       newSquares[index] = "X";
    } else{
      newSquares[index] = "O"
    }
    setXIsNext(!xIsNext);
    setSquares(newSquares);

  }

  return (
    <div className='board'>
      {
        squares.map((value, index) =>
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
          />
        )
      }
    </div>
  )
}

export default Board