// HANDLES THE 3X3 GRID CELL
import React, { useState } from 'react'
import Square from './Square';
import '../App.css'

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const winner = calculateWinner(squares);

  function handleSquareClick(index) {
    if (winner || squares[index]) return;
    const newSquares = squares.slice()
    if (newSquares[index]) return; // if the sqaure is already filled do nothing
    if (xIsNext === true) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O"
    }
    setXIsNext(!xIsNext);
    setSquares(newSquares);

  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] }
      }
    }
    return null;
  }



  let status;
  if (winner) {
    status = "Winner: " + winner.winner;
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw"

  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  function handleRestart() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)

    if (winner) {
      if (winner.winner === "X") setXScore(xScore + 1);
      if (winner.winner === "O") setOScore(oScore + 1);
    }
  }

  return (
    <>
      <div className='app-container'>
        <h1 className='title'>Tic Tac Toe</h1>
        <div className='status'>{status}</div>
        <div className='scoreboard'>X: {xScore} | O: {oScore}</div>
        <div className='board'>
          {
            squares.map((value, index) =>
              <Square
                key={index}
                value={value}
                onClick={() => handleSquareClick(index)}
                highlight={winner?.line?.includes(index)}
              />

            )
          }
        </div>
        <button className='restart' onClick={() => handleRestart()}>Play Again</button>
      </div>
    </>
  )
}

export default Board