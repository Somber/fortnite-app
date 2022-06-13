import React , { useState }from 'react'
import { getPlayer } from '../helpers/getPlayer';

const AddPlayer = ({setPlayers}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getPlayer(inputValue)
            .then(p => {
                const playersTmp = localStorage.getItem('playersV2');
                let players;

                if (!playersTmp){
                    players = [p];

                } else {
                    players = [p, ...JSON.parse(playersTmp)];

                }

                localStorage.setItem('playersV2', JSON.stringify(players));
                setPlayers(players);
            });

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

export default AddPlayer;