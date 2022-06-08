import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function AddPlayer({setPlayer}) {

  const LIMIT_CARDS = 3;

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length>2){
      setPlayer(players=> {
        const playersTemp = players.map((p)=>p);

        if (players.length>=LIMIT_CARDS){
          playersTemp.pop()
        } 

        const result = [inputValue, ...playersTemp];
        localStorage.setItem('players', result)
        return result;
      });  
      
    }

    setinputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputSearch">Buscar Jugador</label>
        <input 
          id='inputSearch'
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

