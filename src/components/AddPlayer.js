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

                const copyListItems = [...players];
                copyListItems.sort((a,b)=>{
                  if (a.overall.kd > b.overall.kd) {
                    return 1;
                  }
                  if (a.overall.kd < b.overall.kd) {
                    return -1;
                  }
                  return 0;
                });
                copyListItems.reverse();
                const kdPlayer = copyListItems[0]

                const t = players.map((pus)=>{
                  pus.kd = kdPlayer.name === pus.name;
                  return pus;
                });

                localStorage.setItem('playersV2', JSON.stringify(t));
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