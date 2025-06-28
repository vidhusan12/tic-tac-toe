// REPRESENTS EACH CELL INDIVIDUAL CELL
import React from 'react'
import '../App.css'

const Square = ({ value, onClick }) => {
  return (
    <>
      <button className='square-button' onClick={onClick}>
        {value}
      </button>

    </>
  )
}

export default Square