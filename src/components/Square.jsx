// REPRESENTS EACH CELL INDIVIDUAL CELL
import React, { useEffect, useState } from 'react'
import '../App.css'


const Square = ({ value, onClick, highlight }) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    onClick()
  }

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => setClicked(false), 200);
      return () => clearTimeout(timeout)
    }
  }, [clicked])

  return (
    <>
      <button
        className={`square${highlight ? ' highlight' : ''}${clicked ? ' clicked' : ''}`}
        onClick={handleClick}>
        {value}
      </button>

    </>
  )
}

export default Square