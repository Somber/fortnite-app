import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function AddPlayer({setPlayer}) {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length>2){
      setPlayer(players=>[...players, inputValue]);  
    }

    setinputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}

AddPlayer.propTypes = {
  setPlayer: PropTypes.func.isRequired
}

