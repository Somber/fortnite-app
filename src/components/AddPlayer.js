import React , { useState }from 'react'
import { Button } from 'react-bootstrap';
import { addPlayer } from '../helpers/addPlayer';


const AddPlayer = ({setPlayers}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0){
          addPlayer(inputValue, setPlayers);
        }
        setinputValue("");
    }

  return (
      <form onSubmit={handleSubmit}>
        <input 
            id='inputSearch'
            type="text"
            placeholder='Introduce jugador a buscar'
            value={inputValue}
            onChange={handleInputChange}
        />
        <Button type="submit" id="buttonSearch">Buscar</Button>
      </form>
  )
}

export default AddPlayer;