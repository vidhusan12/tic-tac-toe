// REPRESENTS EACH CELL INDIVIDUAL CELL
import React from 'react'
import '../App.css'

const Square = ({ value, onClick, highlight }) => {
  return (
    <>
      <button className={highlight ? "square highlight" : "square"} onClick={onClick}>
        {value}
      </button>

    </>
  )
}

export default Square